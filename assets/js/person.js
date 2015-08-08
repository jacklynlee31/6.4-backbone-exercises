// each individual submission in a form
// model

var Person = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    eMail: '',

    // url vs url root
    url: 'http://tiny-lr.herokuapp.com/collection/jc-form'
  }
});
