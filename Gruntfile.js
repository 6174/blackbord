module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     *--clean
     */
    clean: ["build/", "public/javascripts", "public/stylesheets", "public/javascripts"],

    /**
     *--livescripts
     */
    livescript: {
      src: {
        files: {
          // 'path/to/result.js': 'path/to/source.ls', // 1:1 compile
          // 'path/to/another.js': ['path/to/sources/*.ls', 'path/to/more/*.ls'] // compile and concat into single file
        }
      }
    },


    /**
     *---uglify javascripts
     */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */ '
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/public/',
          src: ['**/*.js'],
          dest: 'public/',
          ext: '.js',
        }]
      }
    },

    /**
     *--compile less css files
     */
    less: {
      options: {
        // yuicompress: true
      },
      components: {
        files: [{
          expand: true,
          cwd: 'src/public/stylesheets/',
          src: '**/*.less',
          dest: 'public/stylesheets/',
          ext: '.css'
        }]
      }
    },


    /**
     *--copy
     */
    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src/routes/',
          src: '*',
          dest: 'build/routes/',
          filter: 'isFile'
        }, {
          expand: true,
          flatten: true,
          cwd: 'src/views/',
          src: '*',
          dest: 'build/views/',
          filter: 'isFile'
        }, {
          expand: true,
          flatten: true,
          cwd: 'src/',
          src: '*',
          dest: 'build/',
          filter: 'isFile'
        }]
      }
    }
  });

  
  //--load uglify 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //--load assemble-less
  grunt.loadNpmTasks('assemble-less');
  //--load grunt-livescript
  grunt.loadNpmTasks('grunt-livescript');
  //--load copy
  grunt.loadNpmTasks('grunt-contrib-copy');
  //--load clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'less', 'copy']);
};