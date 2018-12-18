'use strict';

/* jshint node: true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-csslint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-jscs' );
	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>+'
				+ '<%= grunt.template.today("yyyymmdd") %>\n'
				+ '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>'
				+ '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;'
				+ ' License: <%= pkg.license %> */\n'
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
					'dist/jquery.ime/': [
						'rules/**',
						'images/**',
						'css/**'
					]
				}
			}
		},
		qunit: {
			all: {
				options: {
					urls: [ 'http://localhost:9000/test/index.html' ]
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true
			},
			all: [
				'*.js',
				'src/*.js',
				'rules/**/*.js',
				'test/**/*.js'
			]
		},
		jscs: {
			fix: {
				options: {
					fix: true
				},
				src: '<%= jshint.all %>'
			},
			main: {
				src: '<%= jshint.all %>'
			}
		},
		csslint: {
			all: [
				'css/**/*.css'
			]
		},
		watch: {
			files: [
				'.{csslintrc,jscsrc,jshintignore,jshintrc}',
				'<%= jshint.all %>',
				'<%= csslint.all %>'
			],
			tasks: 'lint'
		},
		connect: {
			server: {
				options: {
					hostname: '*',
					port: 9000
				}
			}
		}
	} );

	// Default task.
	grunt.registerTask( 'lint', [ 'jshint', 'jscs:main', 'csslint' ] );
	grunt.registerTask( 'build', [ 'concat', 'uglify', 'copy' ] );
	grunt.registerTask( 'test', [ 'build', 'connect', 'qunit' ] );
	grunt.registerTask( 'default', [ 'lint', 'test' ] );
};
