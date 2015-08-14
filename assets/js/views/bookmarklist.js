// view

var BookmarkListView = Backbone.View.extend({
  template: AppTemplates.bookmarklist,

  el: '#form-target',

  initialize: function() {
    this.render();
  },

  render: function() {
    var data = {};

    if (this.collection) {
      data = this.collection.map(function(model) {
        return model.toJSON();
      });
    }

    var html = this.template(data);
    this.$el.html(html);

    return this;
  }
});
