/**
 * [the overview's view]
 */
define(['backbone', 'model/overviewModel', 'handlebars', 'text!template/overview.tpl'], function(Backbone, OverviewModel, Handlebars, overviewTpl){

	overviewTpl = Handlebars.compile(overviewTpl);


	var Overview = Backbone.View.extend({
		el: 'body',
		model: new OverviewModel(),
		events: {
			"click #search-btn": "search"
		},
		initialize: function(){
			
			this.render();
			this.$search = {
				$field: this.$el.find("#search-field"),
				$btn: this.$el.find("#search-btn")
			};
		},
		render: function(){
			this.$el.html(overviewTpl());
		},
		search: function(e){
			console.log(this.model);
			var currentKeyWord = this.$search.$field.val();
			if (currentKeyWord === "") {
				this.model.loadPupular();
			} else {

			}
		}
	});

	new Overview();
});