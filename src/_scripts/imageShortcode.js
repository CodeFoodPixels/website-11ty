const Image = require("@11ty/eleventy-img");

module.exports = async function imageShortcode(
  src,
  alt,
  sizes = "(min-width: 73.25rem) 62.5rem, (min-width: 54rem) 50rem, (min-width: 41.5rem) 37.5rem, 15.625rem"
) {
  let metadata = await Image(src, {
    widths: [1000, 800, 600, 250],
    formats: ["avif", "webp", "jpeg", "png"],
    outputDir: "./dist/static/images",
    urlPath: "/static/images",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
};