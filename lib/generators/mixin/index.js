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
 * Generate files for a Flight mixin
 *
 * @api public
 */

Generator.prototype.createMixinFiles = function createMixinFiles() {
  this.name = this.name || 'my_component';
  this.template('mixin.js', 'app/scripts/mixins/' + this.name + '.js');
  this.template('spec.js', 'spec/scripts/mixins/' + this.name + '.spec.js', {
    'requirePath': 'mixins/' + this.name,
    'type': 'mixin'
  });
};
