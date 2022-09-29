module.exports = {
  final_title: (data) => (data.draft ? `[DRAFT] ` : "") + data.title,
  // final_description: todo
  final_canonical: (data) => data.site.url + data.page.url,
  final_image: (data) =>
    data.site.url + (data.image ? data.image : "/img/logos/logo.png"),
};
