/*global <%= _.camelize(appname) %>, Backbone, JST*/
<% if( includeRequireJS ){ %>define(
	[
		'jquery',
		'underscore',
		'backbone',
		'templates'
	],
	function($, _, Backbone, Templates){
		'use strict';
		var <%= _.classify(name) %>View = Backbone.View.extend({
			template: Templates[ '<%= jst_path %>' ]
		});
		return <%= _.classify(name) %>View;<% } else { %>
'use strict';
<%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View = Backbone.View.extend({
  template: <%= appname %>.Templates['<%= jst_path %>']<% } %>
<% if( includeRequireJS ){ %>   <% } %>}
);