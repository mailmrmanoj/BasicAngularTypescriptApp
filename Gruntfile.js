module.exports = function (grunt) {

    // Configure grunt here
    grunt.initConfig({
        ts: {
            options: {
                logConcurrentOutput: true,
                sourceMap: true,
                declaration: true
            },
            dev: {                          // a particular target
                src: ["app/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                out: 'app/main.js',         // If specified, generate an out.js file which is the merged js file
                watch: 'app'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['framework/**/*.html'], dest: '../reactore-frontend-frameworks-distribution'},
                    {expand: true, src: ['framework/reactore.js'], dest: '../reactore-frontend-frameworks-distribution'},
                    {expand: true, src: ['framework/reactore.d.ts'], dest: '../reactore-frontend-frameworks-distribution'},
                    {expand: true, src: ['types/**/*'], dest: '../reactore-frontend-frameworks-distribution'},
                    {expand: true, src: ['bower.json'], dest: '../reactore-frontend-frameworks-distribution'}
                 ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9002,
                    base: '',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:9002/app/index.html#'
                    }
                }
            }
        },
		 uglify: {
            main: {
                files: {
                    'framework/reactore.min.js': ['framework/reactore.js']
                }
            }
        }
    });

    // load the task
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // register the defaults
    grunt.registerTask("default", ["ts:dev"]);
    grunt.registerTask("minify", ["uglify:main"]);
    grunt.registerTask("start", ["connect:server"]);
};