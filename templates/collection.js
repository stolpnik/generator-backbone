/*global <%= _.camelize(appname) %>, Backbone*/
<% if( isRequireJsApp ){ %>define(
	[
		'jquery',
		'underscore',
		'backbone',
		<%= 'models/' + name + '-model' %>
	],
	function($, _, Backbone, <%= _.classify(name) %>Model){
		'use strict';
		var <%= _.classify(name) %>Collection = Backbone.Collection.extend({

			model: <%= _.classify(name) %>Model

		});
		return <%= _.classify(name) %>Collection;<% } else { %>
'use strict';
<%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection = Backbone.Collection.extend({

    model: <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>Collection

});<% } %><% if( isRequireJsApp ){ %>	}
);<% } %>
