module.exports = {

	build: {

		options : {
			banner : '/*! <%= app.name %> Wordpress Plugin v<%= app.version %> */ \n'
			// preserveComments : 'some'
		},

		files: {

			'<%= app.jsPath %>/albums.min.js': [
				'<%= app.jsPath %>/albums.js'
			],
		}
	}
};