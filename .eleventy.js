const dayjs = require("dayjs");
const fs = require("fs");
const sass = require("sass");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Add header anchor plugin to Markdown renderer
  const markdownLib = markdownIt({ html: true, typographer: true });
  markdownLib.use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  // Configure excerpts - returns full Markdown
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  // PLUGINS
  eleventyConfig.addPlugin(pluginRss);

  // PASSTHROUGH COPY
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");

  // COLLECTIONS
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("_posts/*.md")
  );

  // SHORTCODES

  eleventyConfig.addLiquidShortcode("base64", (filePath) => {
    const imageBase64 = fs.readFileSync(filePath, "base64");
    const fileExtension = filePath.split(".").at(-1);
    return `data:image/${fileExtension};base64,${imageBase64}`;
  });

  // FILTERS

  eleventyConfig.addLiquidFilter("date_to_string", (dateObj) =>
    dayjs(dateObj).format("D MMM YYYY")
  );

  eleventyConfig.addLiquidFilter(
    "scssify",
    (scssString) =>
      sass.compileString(scssString, {
        loadPaths: ["_sass"],
        style: "compressed",
      }).css
  );

  // TRANSFORMS

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
