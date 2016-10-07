module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.initConfig({
    copy: {
      main: {
        src: "src/bitlib.js",
        dest: "bitlib.js",
        options: {
          process: function(content, srcPath) {
            var math = grunt.file.read("src/bitlib_math.js"),
                context = grunt.file.read("src/bitlib_context.js"),
                color = grunt.file.read("src/bitlib_color.js"),
                random = grunt.file.read("src/bitlib_random.js"),
                anim = grunt.file.read("src/bitlib_anim.js");

            content = content.replace("${bitlib_math}", math);
            content = content.replace("${bitlib_context}", context);
            content = content.replace("${bitlib_color}", color);
            content = content.replace("${bitlib_random}", random);
            content = content.replace("${bitlib_anim}", anim);
            return content;
          }
        }
      }
    },

    watch: {
      main: {
        files: "src/*.js",
        tasks: ["build"]
      }
    },

    uglify: {
      main: {
        files: {
          'bitlib.min.js': ["bitlib.js"]
        }
      }
    }
  
  });

  grunt.registerTask("build", ["copy", "uglify"]);


};
