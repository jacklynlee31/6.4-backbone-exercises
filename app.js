var AppTemplates = {};

AppTemplates['form'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<form>\n    <p>First Name:</p>\n    <input type=\"text\" class=\"firstName\"> "
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\n    <p>Last Name:</p>\n    <input type=\"text\" class=\"lastName\"> "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\n    <p>E-Mail:</p>\n    <input type=\"text\" class=\"e-mail\"> "
    + alias3(((helper = (helper = helpers.eMail || (depth0 != null ? depth0.eMail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eMail","hash":{},"data":data}) : helper)))
    + "\n    <button class=\"submit\">Submit</button>\n</form>\n";
},"useData":true});
// whole form
// view
var FormView = Backbone.View.extend({
  template: AppTemplates.form,

  el: '#target',

  initialize: function() {
    this.render();
  },

  events: {
    'form .submit': 'submitForm'
  },

  submitForm: function(ev) {
    ev.preventDefault();

    var firstName = this.$('#firstName').val();
    var lastName = this.$('#lastName').val();
    var email = this.$('#e-mail').val();

    this.model.save({firstName: firstName, lastName: lastName, email: email});

    this.$('#firstName').val('');
    this.$('#lastName').val('');
    this.$('#e-mail').val('');
  },

  onSubmit: function(ev) {
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }

});


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

// encompases 'everything'
// 'kicks things off'
var person = new Person();
var form = new FormView({model: person});
//# sourceMappingURL=app.map