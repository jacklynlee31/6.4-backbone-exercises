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

