var MainView = Backbone.View.extend({
  template: AppTemplates.detail,

  el: '#main-target',

  initialize: function() {
    this.render();
  },

  render: function() {
    var data = {};

    if (this.model) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    return this;
  }
});
