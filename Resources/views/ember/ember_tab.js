var Label   = require('/lib/em_ti/ui/label'),
    Tab     = require('/lib/em_ti/ui/tab'),
    Window  = require('/lib/em_ti/ui/window');

var EmberLabel = Label.extend({
  backgroundColor: '#fff',
  text: '@emberjs',
  width: 'auto'
});
var EmberWindow = Window.extend({
  backgroundColor: '#fff',
  title: '@emberjs',
  childViews: [EmberLabel]
});

var EmberTab = Tab.extend({
  icon: 'KS_nav_views.png',
  title: '@emberjs',
  window: EmberWindow
});

module.exports = EmberTab;