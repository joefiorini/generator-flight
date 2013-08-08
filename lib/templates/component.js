define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(<%= _.camelize(name) %>);

  function <%= _.camelize(name) %>() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
