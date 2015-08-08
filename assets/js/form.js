// whole form
// view
var FormView = Backbone.View.extend({
  template: AppTemplates.form,

  el: '#target',

  initialize: function() {
    this.render();
  },

  events: {
    'click .submit': 'submitForm'
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  },

  submitForm: function() {
    var _this = this;
    this.$el.submit(function() {
      _this.submit();

      //not a function?
    });
  }
});

// var AppView = Backbone.View.extend({
//   template: AppTemplates.app,

//   el: '#target',

//   render: function() {
//     var html = this.template;
//     var _this = this;
//   }

// });
