module.exports = function(grunt) {

	grunt.registerTask( 'prod', function() {
		grunt.task.run( [
			'rsync:demo',
			'rsync:newdemo',
			// 'rsync:wolf',
			// 'rsync:help',
			'notify:prod'
		] );
	} );
};