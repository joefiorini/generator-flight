define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(<%= _.camelize(moduleName) %>);

  function <%= _.camelize(moduleName) %>() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
