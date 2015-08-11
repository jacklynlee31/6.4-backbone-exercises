// collection

var AllPosts = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lr.herokuapp.com/collections/blog'
});
