// view
// collection.toJSON
var TaglistView = Backbone.View.extend({
  template: AppTemplates.taglist,

  el: '#taglist-target',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'sync add', this.render);
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  }
});
