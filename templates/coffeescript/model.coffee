###global <%= _.camelize(appname) %>, Backbone###
<% if( isRequireJsApp ){ %>define(
	[
		'jquery'
		'underscore'
		'backbone'
	],
($, _, Backbone)->
	'use strict'
	class <%= _.classify(name) %>Model extends Backbone.Model

	return <%= _.classify(name) %>Model<% } else { %>
'use strict'
class <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model extends Backbone.Model<% } %>
<% if( isRequireJsApp ){ %>)<% } %>