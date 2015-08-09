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

