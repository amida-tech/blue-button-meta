/*global module */

"use strict";

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    alljsfiles: ['lib/**/*.js', 'test/*.js', 'gruntfile.js', 'package.json', 'index.js'],
    jsbeautifier: {
      beautify: {
        src: '<%= alljsfiles%>',
        options: {
          config: '.jsbeautifyrc'
        }
      },
      check: {
        src: '<%= alljsfiles%>',
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    jshint: {
      files: '<%= alljsfiles%>',
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        node: true,
        expr: true,
        globals: {
          'xit': true,
          'xdescribe': true,
          'it': true,
          'describe': true,
          'expect': true,
          'before': true,
          'after': true,
          'done': true
        }
      }
    },
    watch: {
      all: {
        files: '<%= alljsfiles%>',
        tasks: ['default']
      }
    },
    run: {
      jest: {
        exec: 'npx jest'
      }
    }
  });

  grunt.registerTask('default', ['beautify', 'jshint', 'run']);
  grunt.registerTask('beautify', ['jsbeautifier:beautify']);
  grunt.registerTask('commit', ['default']);

  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function () {
    grunt.log.subhead(Date());
  });
};
