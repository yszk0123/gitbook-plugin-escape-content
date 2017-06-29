'use strict';
var path = require('path');
var fs = require('fs');
var PLUGIN_NAME = 'escape-content';

function isIncluded(includePaths, pagePath) {
  return includePaths.some(includePath => pagePath.indexOf(includePath) > -1);
}

module.exports = {
  hooks: {
    'page:before': function(page) {
      var options = this.options.pluginsConfig[PLUGIN_NAME] || {};
      var includePaths = options.include || [];

      if (isIncluded(includePaths, page.path)) {
        page.content = '{% raw %}' + page.content + '{% endraw %}';
      }

      return page;
    },
  },
};
