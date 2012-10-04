/* jshint node: true */
module.exports = function ( grunt ) {
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
				src: [ 'src/**/*.js', 'rules/**/*.js' ],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: [ '<banner:meta.banner>', '<config:concat.dist.dest>' ],
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		qunit: {
			files: [ 'test/**/*.html' ]
		},
		lint: {
			files: [ 'src/**/*.js', 'rules/**/*.js', 'test/**/*.js' ]
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
				QUnit: true,
				pluralRuleParser: true,
				_: true,
				module: true,
				test: true
			}
		},
		uglify: {
			src: [ '<banner:meta.banner>', '<config:concat.dist.dest>' ],
			dest: 'dist/<%= pkg.name %>.min.js'
		}
	} );

	// Default task.
	grunt.registerTask( 'default', 'lint qunit concat min' );
	grunt.registerTask( 'test', 'lint qunit' );

};
