'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

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
            message: 'What would be the best name for your Plugin? mh? Choose wisely!',
            default: process.cwd().split(path.sep).pop()
        }, {
            name: 'className',
            message: 'What is the name of the plugins class?'
        }, {
            name: 'descriptionField',
            message: 'Do you have a quick description for me?',
            default: 'Superpower'
        }];

        this.prompt(prompts, function (props) {
            this.pluginName = props.pluginName;
            this.className = props.className;
            this.descriptionField = props.descriptionField;

            done();
        }.bind(this));

    },



    templatefiles: function () {
        var context = {
            pluginName: this.pluginName,
            className: this.className,
            descriptionField: this.descriptionField
        };
        this.template('src/_main.ts', 'src/main.ts', context);
        this.template('src/_plugin.ts', 'src/plugin.ts', context);
        this.template('_package.json', 'package.json', context);
    },

    copyfiles: function () {
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('gitignore', '.gitignore');
        this.copy('index.js', 'index.js');
        this.copy('README.md', 'README.md');
        this.copy('Makefile', 'Makefile');
        this.copy('test/test.js', 'test/test.js');
        this.copy('tsd.json', 'tsd.json');
    },


    install: function () {
        this.installDependencies();
    }
});
