// view

var SidebarView = Backbone.View.extend({
  template: AppTemplates.sidebar,

  el: '#sidebar-target',

  initialize: function() {
    this.render();
  }
});
