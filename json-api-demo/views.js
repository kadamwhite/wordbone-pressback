/**
 * Views for rendering posts
 *
 * Contains the Backbone views for each type of content and post format
 */

var app = app || {};

app.views = ( function( $, Backbone, tmpl, app, undefined ) {
  'use strict';

  var views = {};

  views.Post = Backbone.View.extend({

    render: function() {
      this.$el.html( renderPost( this.model ) );
      return this;
    }

  });

  views.PostList = Backbone.View.extend({

    render: function() {
      var $postList = this.$el;

      this.collection.each(function( post ) {
        var postView = new views.Post({
          model: post
        });

        postView.render().$el.appendTo( $postList );
      });

      return this;
    },

    initialize: function() {
      this.collection.on( 'sync', _.bind( this.render, this ) );
    }

  });

  return views;

} )( jQuery, Backbone, this.tmpl, this.app );