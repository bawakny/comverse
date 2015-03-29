module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			target: {
				src: 'src/js/<%= pkg.name %>.js',
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},
		
		markdown: {
			all: {
				files: [
				{
					expand: true,
					src: 'outline.md',
					dest: './',
					ext: '.html'
				}
				]
			}
		},
		
		watch: {
			scripts: {
				files: ['outline.md'],
				tasks: ['markdown'],
				options: {
					spawn: false,
				},
			},
		}
	});

	// Load the plugins that provides the tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task(s).
	grunt.registerTask('default', ['watch']);
	
	
	
	
	
	
};