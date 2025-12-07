import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import sass from "sass";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import htmlmin from "html-minifier-terser";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import siteData from "./_data/site.js";

export default function (eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  // Custom Markdown config
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true, typographer: true }).use(markdownItAnchor, {
      slugify: (s) =>
        String(s)
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace whitespace with dashes
          .replace(/[^A-Za-z0-9-]/g, ""), // Remove other non-alphanumeric characters
    })
  );

  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addPairedShortcode("scss", function (content) {
    let result = sass.compileString(content, {
      loadPaths: ["_includes", "_sass"],
      style: "compressed",
    });
    return result.css;
  });

  eleventyConfig.addFilter("base64", function (file) {
    if (!fs.existsSync(file)) return "";
    const image = fs.readFileSync(file);
    const dimensions = imageSize(image);
    return `data:image/${dimensions.type};base64,${image.toString("base64")}`;
  });

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content) {
    // String conversion to handle `permalink: false`
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    // If not an HTML output, return content as-is
    return content;
  });

  // RSS/JSON Feeds
  const feedMetadata = {
    language: "en",
    title: siteData.title,
    subtitle: siteData.description,
    base: siteData.url,
    author: {
      name: siteData.author,
      // email: "", // Optional
    },
  };

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/feed.xml",
    // inputPath: "feeds/feed.xml", // by giving it a virtual path, lets us control settings for these pages in feeds/feeds.json
    collection: {
      name: "post", // iterate over `collections.posts`
      limit: 0, // 0 means no limit
    },
    metadata: feedMetadata,
  });
  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/feed.json",
    // inputPath: "feeds/feed.json", // by giving it a virtual path, lets us control settings for these pages in feeds/feeds.json
    collection: {
      name: "post", // iterate over `collections.posts`
      limit: 0, // 0 means no limit
    },
    metadata: feedMetadata,
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
}
