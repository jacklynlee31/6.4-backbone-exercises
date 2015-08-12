var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new InfoSets();
    this.taglistView = new TaglistView({
      collection: this.collection
    });

    this.collection.fetch();
  },

  //place to store the views

  currentView: null,
  taglistView: null,
  tagView: null,

  //when the url looks like this, then
  //call the 'view function on the current router'

  routes: {
    ':id/view': 'view'
  },
  view: function(id) {
    var _this = this;

    var showTaglist = function() {
      // this will run when your url matches id/view
      // look up blog entry in collection
      var model = _this.collection.get(id);

      //set up view, send data into the view

      new TaglistView({
        model: model
      });
    };

    showTaglist();
    this.listenTo(this.collection, 'sync add', showTaglist);
  }
});
