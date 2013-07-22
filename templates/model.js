/*global <%= _.camelize(appname) %>, Backbone*/
<% if( isRequireJsApp ){ %>define(
	[
		'jquery',
		'underscore',
		'backbone'
	],
	function($, _, Backbone){<% } %><% if( isRequireJsApp ){ %>		'use strict';
		var <%= _.classify(name) %>Model = Backbone.Model.extend({

		});
		return <%= _.classify(name) %>Model;<% } else { %>
'use strict';
<%= _.camelize(appname) %>.Models.<%= _.classify(name) %>Model = Backbone.Model.extend({

});<% } %><% if( isRequireJsApp ){ %>   }
);<% } %>