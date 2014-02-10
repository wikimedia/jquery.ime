/* jshint node: true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>+'
				+ '<%= grunt.template.today("yyyymmdd") %>\n'
				+ '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>'
				+ '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;'
				+ ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		},
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: [
					'src/jquery.ime.js',
					'src/jquery.ime.selector.js',
					'src/jquery.ime.preferences.js',
					'src/jquery.ime.inputmethods.js'
				],
				dest: 'dist/jquery.ime/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/jquery.ime/<%= pkg.name %>.min.js': [
						'src/jquery.ime.js',
						'src/jquery.ime.selector.js',
						'src/jquery.ime.preferences.js',
						'src/jquery.ime.inputmethods.js',
						'libs/rangy/rangy-core.js'
					]
				}
			}
		},
		copy: {
			dist: {
				files: {
					'dist/jquery.ime/': ['rules/**', 'images/**', 'css/**']
				}
			}
		},
		qunit: {
			files: [ 'test/index.html' ]
		},
		csslint : {
			file: [ 'css/**/*.css' ]
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: JSON.parse( grunt.file.read( '.jshintrc' )
				.replace( /\/\*(?:(?!\*\/)[\s\S])*\*\//g, '' ).replace( /\/\/[^\n\r]*/g, '' ) ),
			files: [ 'src/**/*.js', 'rules/**/*.js', 'test/**/*.js' ]
		}
	} );

	// Default task.
	grunt.registerTask( 'default', ['jshint', 'qunit', 'concat', 'uglify', 'copy', 'csslint'] );
	grunt.registerTask( 'test', ['jshint', 'qunit'] );
};
