// model

var Tag = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    url: '',
    tag: ''
  }
});
