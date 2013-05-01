<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package BackPressWordBone
 * @subpackage BackPressWordBone_Todo
 * @since BackPress WordBone 0.0.1
 */
?>

<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Backbone.js • TodoMVC • WordPress</title>
		<?php wp_head(); ?>
	</head>
	<body>
		<section id="todoapp">
			<header id="header">
				<h1>todos</h1>
				<input id="new-todo" placeholder="What needs to be done?" autofocus>
			</header>
			<section id="main">
				<input id="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul id="todo-list"></ul>
			</section>
			<footer id="footer"></footer>
		</section>
		<footer id="info">
			<p>Double-click to edit a todo</p>
			<p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
		<script type="text/template" id="item-template">
			<div class="view">
				<input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
				<label><%- title %></label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="<%- title %>">
		</script>
		<script type="text/template" id="stats-template">
			<span id="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>
			<ul id="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			<% if (completed) { %>
			<button id="clear-completed">Clear completed (<%= completed %>)</button>
			<% } %>
		</script>
		<?php wp_footer(); ?>
	</body>
</html>