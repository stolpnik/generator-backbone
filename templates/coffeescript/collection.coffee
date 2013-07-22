###global <%= _.camelize(appname) %>, Backbone###
<% if( isRequireJsApp ){ %>define(
	[
		'jquery'
		'underscore'
		'backbone'
		"<%= 'models/' + name + '-model' %>"
	],
($, _, Backbone, <%= _.classify(name) %>Model )->
	'use strict'
	class <%= _.classify(name) %>Collection extends Backbone.Collection
		model: <%= _.classify(name) %>Model

	return <%= _.classify(name) %>Collection<% } else { %>
'use strict'
class <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection extends Backbone.Collection
	model: <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model<% } %>
<% if( isRequireJsApp ){ %>)<% } %>