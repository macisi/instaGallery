/**
 * [the overview's view]
 */
define(['backbone', 'model/overviewModel', 'handlebars', 'text!template/overview.tpl'], function(Backbone, overviewModel, Handlebars, overviewTpl){

	overviewTpl = Handlebars.compile(overviewTpl);


	var Overview = Backbone.View.extend({
		el: 'body',
		model: overviewModel,
		initialize: function(){
		},
		render: function(){
			this.$el.html(overviewTpl());
		}
	});

	new Overview();
});