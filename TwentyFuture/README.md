# Twenty Future

This experiment is a basic demo of how you can take the [Twenty Twelve](http://twentytwelvedemo.wordpress.com/) default theme and replace the rendering of the loop with a Backbone view.

## Dependencies

This demo depends on the [JSON API plugin](http://wordpress.org/plugins/json-api/).

## Installation

As long as the JSON API plugin is installed, simply downloading this theme and copying it to your `/themes` folder should work as expected. However, if you wish to customize or otherwise play with this code yourself, use the following directions to install some tools that will make your life easier:

1. Download this directory to your `/themes` folder
2. From a terminal, navigate to the downloaded folder, then run `npm install` from the command line. This will install [Grunt](http://gruntjs.com), which is used for compiling the templates.
  * NPM is a package manager for [Node.js](http://nodejs.org/), so you'll need to install Node before the `npm` command will work
3. Run `npm install -g grunt-cli` to install the Grunt command-line interface (this is necessary to take advantage of the modules you just installed in step 2)
  * If this install fails and you're on a Mac, you may need to run it as an administrator using `sudo npm install -g grunt-cli` -- The `-g` means "Install Globally," which can prompt your computer to require admin privileges. Don't worry, it's totally safe.
4. Run `grunt watch` from the terminal

While Grunt Watch is running, any changes you make to JavaScript files will be checked for errors using JSHint, and any changes you make to `*.tmpl` JS template files will be automatically compiled.

Activate the theme, hit your site, and see if it works!
