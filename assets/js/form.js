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
    var address = this.$('#address').val();
    var phone = this.$('#phone').val('');

    this.model.save({firstName: firstName, lastName: lastName, address: address, phone: phone});

    this.$('#first-name').val('');
    this.$('#last-name').val('');
    this.$('#address').val('');
    this.$('#phone').val('');

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

