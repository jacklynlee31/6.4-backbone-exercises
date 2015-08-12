// view

var FormView = Backbone.View.extend({
  template: AppTemplates.form,

  el: '#form-target',

  initialize: function() {
    this.render();
  },

  events: {
    'submit form': 'createTag'
  },

  createTag: function(ev) {
    ev.preventDefault();

    var url = this.$('#url').val();
    var title = this.$('#title').val();
    var tag = this.$('#tag').val();

    this.model.save({url: url, title: title, tag: tag});

    this.$('#url').val('');
    this.$('#title').val('');
    this.$('#tag').val('');
    this.model = new Tag();
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }

});

  // render: function() {
  //   var data = {};

  //   if (this.model) {
  //     data = this.model.toJSON();
  //   }

  //   var html = this.template(data);
  //   this.$el.html(html);

  //   return this;
  // }
