const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
	style: {
		postcss: {
			mode: 'extends',
			plugins: [
				postcssCustomMedia({
					importFrom: ['src/styles/custom-media.css'],
				}),
			],
		},
	},
};
