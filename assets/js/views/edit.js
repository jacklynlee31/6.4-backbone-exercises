var EditView = Backbone.View.extend({
  template: AppTemplates.edit,

  events: {
    'click button.delete': 'deletePost',
    'click button.save': 'savePost'
  },
  deletePost: function(ev) {
    ev.preventDefault();

    this.model.destroy({title: title, body: body});
  },

  savePost: function(ev) {
    ev.preventDefault();

    this.model.save({title: title, body: body});
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
