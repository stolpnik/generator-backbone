###global <%= _.camelize(appname) %>, Backbone, JST###
<% if( includeRequireJS ){ %>define(
	[
		'jquery'
		'underscore'
		'backbone'
		'templates'
	],
	($, _, Backbone, Templates)->
		'use strict'
		class <%= _.classify(name) %>View extends Backbone.View
			template: Templates[ '<%= jst_path %>' ]

		return <%= _.classify(name) %>View<% } else { %>
'use strict'
class <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>View extends Backbone.View
	template: <%= appname %>.Templates['<%= jst_path %>']<% } %>
<% if( includeRequireJS ){ %>)<% } %>