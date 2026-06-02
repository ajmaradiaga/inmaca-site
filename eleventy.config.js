export default function (eleventyConfig) {
  // Copy static assets straight through to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Use .njk for templating, .md for content
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
