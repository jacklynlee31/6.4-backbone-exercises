var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new InfoSets();
    this.renderTaglist();

    this.listenTo(this.collection, 'sync', this.renderTaglist);
    this.collection.fetch();
  },

  renderTaglist: function() {
    var tags = this.collection.chain().clone().map(function(bookmark) {
      return bookmark.get('tag');
    }).unique().value();

    this.taglistView = new TaglistView({
      collection: tags
    });
  },

  //place to store the views

  currentView: null,
  taglistView: null,
  tagView: null,

  //when the url looks like this, then
  //call the 'view function on the current router'

  routes: {
    new: 'create',
    '(:id)': 'filter'
  },

  create: function() {
    this.form = new FormView({collection: this.collection});
  },

  filter: function(tag) {
    var _this = this;
    console.log('show filter');

    var showTaglist = function() {
      // this will run when your url matches id/view
      // look up blog entry in collection

      var collection = _this.collection.filter(function(model) {
        if (!tag) {
          return true;
        }

        return model.get('tag') === tag;
      });

      //set up view, send data into the view

      new BookmarkListView({
        collection: collection
      });
    };

    showTaglist();
    this.listenTo(this.collection, 'sync add', showTaglist);
  }
});
