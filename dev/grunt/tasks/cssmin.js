module.exports = {
	
	main : {
		options: {
			// noAdvanced: true,
			// compatibility : true,
			// debug : true
			// keepBreaks : true
		},
		files: {
			'<%= app.cssPath %>/twitter.min.css': [
				'<%= app.cssPath %>/twitter.css'
			]
		}
	}
};