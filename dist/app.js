var AppTemplates = {};

AppTemplates['form'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<form>\n    <p>First Name:</p>\n    <input type=\"text\" id=\"first-name\"> "
    + alias3(((helper = (helper = helpers['first-name'] || (depth0 != null ? depth0['first-name'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first-name","hash":{},"data":data}) : helper)))
    + "\n    <p>Last Name:</p>\n    <input type=\"text\" id=\"last-name\"> "
    + alias3(((helper = (helper = helpers['last-name'] || (depth0 != null ? depth0['last-name'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last-name","hash":{},"data":data}) : helper)))
    + "\n    <p>E-Mail:</p>\n    <input type=\"text\" id=\"e-mail\"> "
    + alias3(((helper = (helper = helpers['e-mail'] || (depth0 != null ? depth0['e-mail'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"e-mail","hash":{},"data":data}) : helper)))
    + "\n    <button id=\"submit\">Submit</button>\n</form>\n";
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
    'submit form': 'createPerson'

    // 'form .submit': 'submitForm'
  },

  createPerson: function(ev) {
    ev.preventDefault();

    var firstName = this.$('#first-name').val();
    var lastName = this.$('#last-name').val();
    var email = this.$('#e-mail').val();

    this.model.save({firstName: firstName, lastName: lastName, email: email});

    this.$('#first-name').val('');
    this.$('#last-name').val('');
    this.$('#e-mail').val('');

    this.model = new Person();
  },

  // onSubmit: function(ev) {
  // },

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
  url: 'http://tiny-lr.herokuapp.com/collections/jc-form'
});

// encompases 'everything'
// 'kicks things off'
// var person = new Person();
// var form = new FormView({model: person});

var form = new FormView({model: new Person()});
//# sourceMappingURL=app.map