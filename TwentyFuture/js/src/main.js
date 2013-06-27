( function( $, app, undefined ) {

  var posts = new app.models.Posts({});

  var postList = new app.views.PostList({
    el: $('#posts'),
    collection: posts
  });

  // Grab the JSON for the current page's posts
  posts.fetch();

} )( jQuery, this.app );