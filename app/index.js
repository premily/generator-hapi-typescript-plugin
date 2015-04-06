'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the excellent ' + chalk.red('HapiTypescriptPluginGenerator') + ' generator!'
        ));

        var prompts = [{
            name: 'pluginName',
            message: 'What would be the best name for your Plugin? mh? Choose wisely!'
        }];

        this.prompt(prompts, function (props) {
            this.pluginName = props.pluginName;

            done();
        }.bind(this));

    },



    templatefiles: function () {
        var context = {
            pluginName: this.pluginName
        };
        this.template('src/_main.ts', 'src/main.ts', context);
        this.template('src/_plugin.ts', 'src/plugin.ts', context);
    },

    copyfiles: function () {
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('gitignore', '.gitignore');
        this.copy('index.js', 'index.js');
        this.copy('README.md', 'README.md');
        this.copy('Makefile', 'Makefile');
        this.copy('test/test.js', 'test/test.js');
    },


    install: function () {
        this.installDependencies();
    }
});
