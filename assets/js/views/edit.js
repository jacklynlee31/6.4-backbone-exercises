var EditView = Backbone.View.extend({
  template: AppTemplates.edit,

  events: {
    'click .delete-button': 'deletePost',
    'click .save-button': 'savePost'
  },
  deletePost: function(ev) {
    ev.preventDefault();

    this.model.destroy({title: title, body: body});
  },

  savePost: function(ev) {
    ev.preventDefault();

    var title = title.$el.find('#title').val();
    var body = body.$el.find('#body').val();
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
