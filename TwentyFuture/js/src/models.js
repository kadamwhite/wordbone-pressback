/**
 * Models for posts
 *
 * Contains the Backbone models and collection for posts
 */

var app = app || {};

app.models = ( function( $, Backbone, app, undefined ) {
  'use strict';

  var models = {};

  models.Post = Backbone.Model.extend({

    // Add a helper method to format a human-readable date
    dateString: function() {
      var date, day, month, year, monthNames;

      monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];

      date = new Date( this.get('date') );

      day = date.getDate();
      month = monthNames[ date.getMonth() ];
      year = date.getFullYear();

      return month + ' ' + day + ', ' + year;
    }

  });

  models.Posts = Backbone.Collection.extend({

    // A collection of Posts is a collection of Post models
    model: models.Post,

    // `parse` can transform the server response before any models are set
    parse: function( response, options ) {

      if ( response.posts ) {
        // Return the array of posts
        return response.posts;
      }

      // Else: is_single, so create an array containing the single post
      return [ response.post ];
    },

    // Get the URL of the collection by taking the current page and adding
    // the `json=1` query parameter
    url: function() {

      var href, queryExists;

      href = window.location.href;
      queryExists = href.indexOf('?') > 0;

      if ( queryExists ) {
        return href.replace( /\?/, '?json=1&' );
      }

      return href + '?json=1';
    }

  });

  return models;

} )( jQuery, Backbone, this.app );