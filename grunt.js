/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-mincss');
  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    mincss: {
      compress: {
        files: {
          "stylesheets/bootstrap.css": ["stylesheets/normalize.css", "stylesheets/reset.css", "stylesheets/base.css", "stylesheets/grid.css", "stylesheets/list.css", "stylesheets/table.css", "stylesheets/form.css", "stylesheets/responsive.css"]
        }
      }
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
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    
    uglify: {}
  });
  // Default task.
  grunt.registerTask('default', 'mincss');

};
