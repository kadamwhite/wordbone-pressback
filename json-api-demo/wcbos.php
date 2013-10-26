<?php
/**
 * Plugin Name: WordCamp Boston JS Demo
 * Description: Enqueues rmmccue's JSON API script to expose wp.api
 * Author: K.Adam White
 * Author URI: http://kadamwhite.com/
 * Version: 0.1
 * Plugin URI: https://github.com/kadamwhite
 */

function wcbos_enqueue_scripts() {
    wp_register_script(
        'wcbos-helpers',
        plugins_url( '/helpers.js', __FILE__ ),
        array(),
        '',
        true
    );
    wp_register_script(
        'wcbos-views',
        plugins_url( '/views.js', __FILE__ ),
        array(),
        '',
        true
    );
    wp_enqueue_script('wp-api');
    wp_enqueue_script('wcbos-views');
    wp_enqueue_script('wcbos-helpers');
}
add_action( 'wp_enqueue_scripts', 'wcbos_enqueue_scripts' );
