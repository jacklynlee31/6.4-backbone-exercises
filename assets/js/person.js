// each individual submission in a form
// model

var Person = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  },

  // url vs url root
  urlRoot: 'http://tiny-lr.herokuapp.com/collection/jc-form'
});
