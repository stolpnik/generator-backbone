###global <%= _.camelize(appname) %>, Backbone###

<% if( isRequireJsApp ){ %>
define(
	[
		'jquery'
		'underscore'
		'backbone'
	],
($, _, Backbone)->
<% } %>
<% if( isRequireJsApp ){ %>
	'use strict'
	class <%= _.classify(name) %>Router extends Backbone.Router
		routes:
			"": "index"

		index: ->
			null

	return <%= _.classify(name) %>Router
<% } else { %>
'use strict'
class <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router extends Backbone.Router
	routes:
		"": "index"

	index: ->
		null

<% } %>

<% if( isRequireJsApp ){ %>)<% } %>