var humanReadableDate = function( dateValue ) {
    var date, day, month, year, monthNames;

    monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    date = new Date( dateValue );

    day = date.getDate();
    month = monthNames[ date.getMonth() ];
    year = date.getFullYear();

    return month + ' ' + day + ', ' + year;
}

var TEMPLATE_URL = '/wp-content/plugins/wcbos/content.tmpl';


/*

// Paste these in order to remove
// and re-render the content area

jQuery.get(TEMPLATE_URL).then(function(tmpl) {
    window.renderPost = _.template( tmpl );
});

window.posts = new wp.api.collections.Posts();

var postList = new app.views.PostList({
    el: jQuery('#content'),
    collection: posts
});

jQuery('#content').empty();

posts.fetch();

*/
