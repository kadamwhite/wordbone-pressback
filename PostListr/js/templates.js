this["tmpl"] = this["tmpl"] || {};

this["tmpl"]["templates/post.tmpl"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="row">\n\n  <div class="span2">\n    '; if ( featured_image ) { ;__p += '\n    <img class="span2" src="' +((__t = ( featured_image )) == null ? '' : __t) +'" alt="Featured Image for ' +__e( title ) +'"/>\n    '; } ;__p += '\n  </div> <!-- .span2 -->\n\n  <div class="span8">\n    <div class="pad">\n      <h4>\n        <a href="' +((__t = ( URL )) == null ? '' : __t) +'">' +((__t = ( title )) == null ? '' : __t) +'</a>\n      </h4>\n      <p class="meta">\n        <em>Posted on ' +((__t = ( new Date( date ).toDateString() )) == null ? '' : __t) +' by ' +((__t = ( author.name )) == null ? '' : __t) +'</em>\n      </p>\n    </div> <!-- .pad -->\n  </div> <!-- .span8 -->\n\n</div> <!-- .row -->\n\n<hr />';}return __p};