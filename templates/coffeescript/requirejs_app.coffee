### global require ###
'use strict';

require.config(
		shim:
				underscore:
						exports: '_'

				backbone:
						deps: [
								'underscore'
								'jquery'
						]
						exports: 'Backbone'
				<% if (compassBootstrap) { %>

				bootstrap:
						deps: ['jquery']
						exports: 'jquery'
				<% } %><% if (templateFramework === 'handlebars') { %>

				handlebars:
						exports: 'Handlebars'
				<% } %>

		paths:
				jquery: '../bower_components/jquery/jquery'
				backbone: '../bower_components/backbone-amd/backbone'
				underscore: '../bower_components/underscore-amd/underscore'<% if (compassBootstrap) { %>
				bootstrap: 'vendor/bootstrap'<% } %><% if (templateFramework === 'handlebars') { %>
				handlebars: '../bower_components/handlebars/handlebars'<% } %><% if (templateFramework === 'hogan') { %>
				hogan: '../bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd'
				<% } %>
)

require([
		'backbone'
], (Backbone)->
		Backbone.history.start()
)
