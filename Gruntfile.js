module.exports = function(grunt){

	grunt.initConfig({
		watch: {
			css: {
				files: ['style/app.less'],
				tasks: ['less']
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: '',
					keepalive: true
				}
			}
		},
		less: {
			files: {
				src: 'style/app.less',
				dest: 'style/app.css'
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['connect']);
}