var EditView = Backbone.View.extend({
  template: AppTemplates.edit,

  events: {
    'remove entry': 'deletePost'
  },
  deletePost: function(ev) {
    ev.preventDefault();

    this.model.destroy({title: title, body: body});
  },

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
