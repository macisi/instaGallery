/**
 * [define the overview model]
 */
define(['backbone'], function(Backbone){

	var OverviewModel = Backbone.Model.extend({
		initialize: function(){
		},
		loadPopular: function(){
			console.log("load", this)
		}
	});

	return OverviewModel;
});