// model

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    content: '',
    date: ''
  }
});
