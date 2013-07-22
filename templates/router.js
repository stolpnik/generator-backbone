/*global <%= _.camelize(appname) %>, Backbone*/
<% if( isRequireJsApp ){ %>define(
	[
		'jquery',
		'underscore',
		'backbone'
	],
	function($, _, Backbone){
		'use strict';
		var <%= _.classify(name) %>Router = Backbone.Router.extend({

		});
		return <%= _.classify(name) %>Router;<% } else { %>
'use strict';
<%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router = Backbone.Router.extend({

});<% } %>
<% if( isRequireJsApp ){ %>	}
);<% } %>