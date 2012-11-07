/* jshint node: true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Project configuration.
	grunt.initConfig( {
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - '
					+ '<%= grunt.template.today("yyyy-mm-dd") %>\n'
					+ '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>'
					+ '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;'
					+ ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		concat: {
			dist: {
				src: [ 'src/**/*.js' ],
				dest: 'dist/jquery.ime/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: [ '<banner:meta.banner>', '<config:concat.dist.dest>' ],
				dest: 'dist/jquery.ime/<%= pkg.name %>.min.js'
			}
		},
		copy: {
			dist: {
				files: {
					'dist/jquery.ime/rules/': 'rules/**',
					'dist/jquery.ime/images/': 'images/**',
					'dist/jquery.ime/css/': 'css/**'
				}
			}
		},
		qunit: {
			files: [ 'test/index.html' ]
		},
		lint: {
			files: [ 'src/**/*.js', 'rules/**/*.js', 'test/**/*.js' ]
		},
		csslint : {
			file: [ 'css/**/*.css' ]
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				smarttabs: true,
				laxbreak: true,
				white: false
			},
			globals: {
				jQuery: true,
				QUnit: true
			}
		},
		uglify: {
			src: [ '<banner:meta.banner>', '<config:concat.dist.dest>' ],
			dest: 'dist/<%= pkg.name %>.min.js'
		}
	} );

	// Default task.
	grunt.registerTask( 'default', 'lint qunit concat min copy csslint' );
	grunt.registerTask( 'test', 'lint qunit' );

};
