var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new AllPosts();
    this.sidebarView = new SidebarView({
      collection: this.collection
    });
    this.createView = new CreateView({
      collection: this.collection
    });
    this.mainView = new MainView({
      collection: this.collection
    });
    this.collection.fetch();
  },

  //place to store the views

  currentView: null,
  mainView: null,
  createView: null,
  sidebarView: null,

  //when the url looks like this, then
  //call the 'view function on the current router'

  routes: {
    ':id/view': 'view'
  },

  create: function() {
    this.form = new FormView({collection: this.collection});
  },

  view: function(id) {
    var _this = this;

    var showPost = function() {
      // this will run when your url matches id/view
      // look up blog entry in collection
      var model = _this.collection.get(id);

      //set up view, send data into the view

      new MainView({
        model: model
      });
    };

    showPost();
    this.listenTo(this.collection, 'sync add', showPost);
  }
});
