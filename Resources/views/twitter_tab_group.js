var TabGroup        = require('/lib/em_ti/ui/tab_group'),
    AppceleratorTab = require('/views/appcelerator/appcelerator_tab'),
    EmberTab        = require('/views/ember/ember_tab');

var TwitterTabGroup = TabGroup.extend({
  childViews: [AppceleratorTab, EmberTab]
});

module.exports = TwitterTabGroup;