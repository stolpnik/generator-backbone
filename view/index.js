/*jshint latedef:false */
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman-generator'),
  scriptBase = require('../script-base');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
  this.sourceRoot(path.join(__dirname, dirPath));
  this.includeRequireJS = this.isUsingRequireJS();
}

util.inherits(Generator, scriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  var ext = this.options.coffee ? 'coffee' : 'js';
  var templateFramework = this.getTemplateFramework();
  var templateExt = '.ejs';
  if (templateFramework === 'mustache') {
    templateExt = '-template.mustache';
  } else if (templateFramework === 'handlebars') {
    templateExt = '.hbs';
  } else if (templateFramework === 'hogan') {
	templateExt = '.mustache'
  }
  this.jst_path = path.join('app/scripts/templates', this.name + templateExt);
  var destFile = path.join('app/scripts/views', this.name + '-view.' + ext);

  this.template('view.ejs', this.jst_path);
  if (templateFramework === 'mustache') {
    this.jst_path = this.name + '-template';
  }

  this.template('view.' + ext, destFile);
//  if (!isRequireJsApp) {
//    this.template('view.' + ext, destFile);
//    return;
//  }
//
//  var template = [
//    '/*global define*/',
//    '',
//    'define([',
//    '    \'jquery\',',
//    '    \'underscore\',',
//    '    \'backbone\',',
//    '    \'templates\'',
//    '], function ($, _, Backbone, JST) {',
//    '    \'use strict\';',
//    '',
//    '    var ' + this._.classify(this.name) + 'View = Backbone.View.extend({',
//    '        ' + 'template: JST[\'' + this.jst_path + '\']',
//    '    });',
//    '',
//    '    return ' + this._.classify(this.name) + 'View;',
//    '});',
//  ].join('\n');
//
//  this.write(destFile, template);
};
