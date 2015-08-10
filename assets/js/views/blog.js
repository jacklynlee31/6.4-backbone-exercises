// view

var BlogView = Backbone.View.extend({
  template: AppTemplates.blog,

  el: '#blog-target',

  initialize: function() {
    this.render();
  }
});
