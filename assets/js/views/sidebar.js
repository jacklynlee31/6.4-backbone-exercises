// view

var SidebarView = Backbone.View.extend({
  template: AppTemplates.sidebar,

  el: '#sidebar-target',

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  }
});
