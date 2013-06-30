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
          "js/templates.js": ["templates/**/*.tmpl"]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default', ['jst']);
};
