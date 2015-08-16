var CreateView = Backbone.View.extend({
  template: AppTemplates.create,

  el: '#create-target',

  initialize: function() {
    this.render();

    // this.listenTo(this.collection, 'sync add', this.render);
  },

  events: {
    'submit form': 'createPost'
  },

  createPost: function(ev) {
    ev.preventDefault();

    var title = this.$('#title').val();
    var body = this.$('#body').val();

    this.collection.create({title: title, body: body});

    this.$('#title').val('');
    this.$('#body').val('');

    this.collection = new Post();
  },

  render: function() {
    var html = this.template(this.collection);
    this.$el.html(html);

    return this;
  }
});
