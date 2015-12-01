'use strict';
var yeoman = require('yeoman-generator');

// var Generator = yeoman.generators.Base.extend({
//   compose: function() {
//     this.composeWith('ng-component:controller', {arguments: this.arguments}, { local: require.resolve('generator-ng-component/controller') });
//   }
// });

var path = require('path');
var util = require('util');
var ngUtil = require('../node_modules/generator-ng-component/util');
var ScriptBase = require('../node_modules/generator-ng-component/script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.prompting = function askFor() {
  var self = this;
  var done = this.async();
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this hat??',
      default: 'client/'
    }
  ];

  this.prompt(prompts, function (props) {
    // if (props.dir === 'client/') {
    //   props.dir = "";
    // }
    this.dir = path.join('client/modules/' + props.dir);
    done();
  }.bind(this));  
};

Generator.prototype.writing = function createFiles() {
  console.log(this);
  ngUtil.copyTemplates(this, 'controller');
};

module.exports = Generator;



