<?php
/**
 * BackPress WordBone functions and definitions.
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package BackPressWordBone
 * @subpackage BackPressWordBone_Todo
 * @since BackPress WordBone 0.0.1
 */

/**
 * Enqueues scripts and styles for use on the front-end.
 *
 * @since BackPress WordBone 0.0.1
 */
function backpress_wordbone_scripts() {
	/*
	 * De-register the built-in scripts to make room for the JS required by our application.
	 */
	wp_deregister_script('jquery');
	wp_deregister_script('underscore');
	wp_deregister_script('backbone');

	/*
	 * Loads the client JavaScript, including our own versions of jQuery, Underscore and Backbone
	 */
	wp_enqueue_script('jquery', get_stylesheet_directory_uri().'/lib/jquery/jquery.js');
	wp_enqueue_script('underscore', get_stylesheet_directory_uri().'/lib/underscore/underscore.js');
	wp_enqueue_script('backbone', get_stylesheet_directory_uri().'/lib/backbone/backbone.js');
	wp_enqueue_script('base', get_stylesheet_directory_uri().'/lib/todomvc-common/base.js', false, false, true);
	wp_enqueue_script('localStorage', get_stylesheet_directory_uri().'/lib/backbone.localStorage/backbone.localStorage.js', false, false, true);
	wp_enqueue_script('todo-models', get_stylesheet_directory_uri().'/js/models/todo.js', false, false, true);
	wp_enqueue_script('todo-collections', get_stylesheet_directory_uri().'/js/collections/todos.js', false, false, true);
	wp_enqueue_script('todo-views', get_stylesheet_directory_uri().'/js/views/todos.js', false, false, true);
	wp_enqueue_script('app-views', get_stylesheet_directory_uri().'/js/views/app.js', false, false, true);
	wp_enqueue_script('router', get_stylesheet_directory_uri().'/js/routers/router.js', false, false, true);
	wp_enqueue_script('app', get_stylesheet_directory_uri().'/js/app.js', array('jquery'), false, true);

	/*
	 * Loads our main stylesheet.
	 */
	wp_enqueue_style( 'backpresswordbone-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'backpress_wordbone_scripts' );
