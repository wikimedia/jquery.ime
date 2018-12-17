/* eslint-env node */
module.exports = function ( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>+' +
				'<%= grunt.template.today("yyyymmdd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' License: <%= pkg.license %> */\n'
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
			files: [ 'test/index.html' ]
		},
		eslint: {
			all: [
				'**/*.js',
				'!libs/**',
				'!dist/**',
				'!node_modules/**'
			]
		},
		stylelint: {
			options: {
				syntax: 'css'
			},
			src: [
				'**/*.css',
				'!node_modules/**'
			]
		},
		watch: {
			files: [
				'.{eslintrc.json}'
			],
			tasks: 'lint'
		}
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint' ] );
	grunt.registerTask( 'build', [ 'concat', 'uglify', 'copy' ] );
	grunt.registerTask( 'test', [ 'build', 'qunit' ] );
	grunt.registerTask( 'default', [ 'lint', 'test' ] );
};
