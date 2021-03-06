/**
 * Module dependencies.
 */

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/'));
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate files for a Flight component
 *
 * @api public
 */

Generator.prototype.createComponentFiles = function createComponentFiles() {
  this.name = this.name || 'my_component';
  this.moduleName = this.name.split('/').slice(-1);
  this.template('component.js', 'app/scripts/modules/' + this.name + '.js');
  this.template('spec.js', 'spec/scripts/modules/' + this.name + '.spec.js', {
    'requirePath': 'modules/' + this.name,
    'type': 'component'
  });
};
