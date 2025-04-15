import { DateTime } from "luxon";

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addWatchTarget("src/css/");

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
	eleventyConfig.addFilter("debugger", (...args) => {
		console.log(...args);
		debugger;
	});

	return {
		dir: {
			input: "src",
			includes: "_includes",
			output: "_site",
		},
		templateFormats: ["njk", "md", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
}
