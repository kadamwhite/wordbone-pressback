(function($, Backbone) {

  var Post = Backbone.Model.extend({});

  var Posts = Backbone.Collection.extend({
    model: Post,
    parse: function( response ) {
      return response.posts;
    }
  });

  var PostView = Backbone.View.extend({
    template: tmpl['templates/post.tmpl'],
    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    }
  });

  var PostList = Backbone.View.extend({
    render: function() {
      var $postList = this.$el;
      $postList.empty();
      this.collection.each(function( model ) {
        var postView = new PostView({
          model: model
        });
        postView.render().$el.appendTo( $postList );
      });
      return this;
    },
    initialize: function() {
      this.collection.fetch(); // Auto-load when created
      this.listenTo( this.collection, 'sync reset', this.render );
    }
  });

  var BlogForm = Backbone.View.extend({
    events: {
      'submit form': 'loadPosts'
    },
    loadPosts: function( evt ) {
      var blog, newBlogUrl;

      evt.preventDefault();

      // Get whatever the user entered
      blog = this.$el.find('input').val();
      // Strip slashes
      blog = blog.replace(/\//g, '');

      if ( !blog ) {
        // Nothing was entered
        return;
      }

      newBlogUrl = [
        'http://public-api.wordpress.com/rest/v1/sites/',
        blog,
        '/posts/?number=10&callback=?'
      ].join('');

      this.collection.url = newBlogUrl;
      this.collection.reset();
      this.collection.fetch({ reset: true });
    }
  });

  var LoadingSpinner = Backbone.View.extend({
    toggle: function() {
      if ( this.collection.length > 0 ) {
        this.$el.hide();
      } else {
        this.$el.show();
      }
    },
    initialize: function() {
      this.listenTo( this.collection, 'reset add', this.toggle );
    }
  });

  var posts = new Posts([], {
    url: 'http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=10&callback=?'
  });

  var postList = new PostList({
    collection: posts,
    el: '#app'
  });

  var blogForm = new BlogForm({
    el: '.hero-unit',
    collection: posts
  });

  var spinner = new LoadingSpinner({
    el: '.spinner',
    collection: posts
  });

})(jQuery, Backbone);