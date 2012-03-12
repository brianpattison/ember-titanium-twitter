var Label   = require('/lib/em_ti/ui/label'),
    Tab     = require('/lib/em_ti/ui/tab'),
    Window  = require('/lib/em_ti/ui/window');

var AppceleratorLabel = Label.extend({
  backgroundColor: '#fff',
  text: '@appcelerator',
  width: 'auto'
});
var AppceleratorWindow = Window.extend({
  backgroundColor: '#fff',
  title: '@appcelerator',
  childViews: [AppceleratorLabel]
});

var AppceleratorTab = Tab.extend({
  icon: 'KS_nav_ui.png',
  title: '@appcelerator',
  window: AppceleratorWindow
});

module.exports = AppceleratorTab;