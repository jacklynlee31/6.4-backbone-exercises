// view
// collection.toJSON
var TaglistView = Backbone.View.extend({
  template: AppTemplates.taglist,

  el: '#taglist-target',

  initialize: function() {
    console.log(this.collection);
    this.render();
  },

  render: function() {
    var html = this.template(this.collection);
    this.$el.html(html);

    return this;
  }
});
