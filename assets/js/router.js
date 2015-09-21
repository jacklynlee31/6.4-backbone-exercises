var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new AllPosts();
    this.sidebarView = new SidebarView({
      collection: this.collection
    });
    this.collection.fetch();
  },

  //place to store the views

  currentView: null,
  mainView: null,
  createView: null,
  sidebarView: null,
  editView: null,

  //when the url looks like this, then
  //call the 'view function on the current router'

  routes: {
    ':id/view': 'view',
    new: 'create',
    ':id/edit': 'edit'
  },

  create: function(id) {
    var _this = this;

    // this.form = new FormView({collection: this.collection});

    var view = new CreateView({
      collection: _this.collection
    });

    $('#main-target').html(view.el);
  },

  view: function(id) {
    var _this = this;

    var showPost = function() {
      // this will run when your url matches id/view
      // look up blog entry in collection
      var model = _this.collection.get(id);

      //set up view, send data into the view

      var view = new MainView({
        model: model
      });

      $('#main-target').html(view.el);
    };

    showPost();
    this.listenTo(this.collection, 'sync add', showPost);
  },

  edit: function(id) {
    var _this = this;

    var editPost = function() {
      var model = _this.collection.get(id);

    var edit = new EditView({
      collection: _this.collection
    });

    $('#main-target').html(edit.el);
  };

    editPost();
    this.listenTo(this.collection, 'sync add', editPost);
  },
});
