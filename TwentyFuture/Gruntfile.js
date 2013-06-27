module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jst: {
      compile: {
        options: {
          namespace: 'tmpl',
          prettify: true
        },
        files: {
          "js/templates.js": ["**/*.tmpl"]
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          Backbone: true,
          _: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      javascript: {
        files: ['Gruntfile.js', 'js/src/**/*.js'],
        tasks: ['jshint'],
        options: {
          debounceDelay: 500
        }
      },

      templates: {
        files: ['**/*.tmpl'],
        tasks: ['jst'],
        options: {
          debounceDelay: 500
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jst']);
};
