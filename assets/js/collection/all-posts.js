// collection

var BlogPosts = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lr.herokuapp.com/collections/jc-blog'
});
