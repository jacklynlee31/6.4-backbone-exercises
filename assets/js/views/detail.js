// view

var DetailView = Backbone.View.extend({
  template: AppTemplates.detail,

  el: '#detail-target',

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
