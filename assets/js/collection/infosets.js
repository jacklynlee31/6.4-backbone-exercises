// collection

var InfoSets = Backbone.Collection.extend({
  model: Tag,
  url: 'http://tiny-lr.herokuapp.com/collections/jc-tag'
});
