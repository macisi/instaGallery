/**
 * [the overview's view]
 */
define(['backbone', 'model/overviewModel', 'handlebars', 'text!template/overview.tpl'], function(Backbone, OverviewModel, Handlebars, overviewTpl){

	overviewTpl = Handlebars.compile(overviewTpl);

	var Overview = Backbone.View.extend({
		el: 'body',
		events: {
			'click #search-btn': 'search'
		},
		initialize: function(){
			
			this.render();
			this.$search = {
				$field: this.$el.find('#search-field'),
				$btn: this.$el.find('#search-btn')
			};
			this.$container = this.$('#container');

			this.listenTo(this.model.medias, 'reset', function(collection, options){
				var fragHTML = [];
				collection.forEach(function(model){
					fragHTML.push(model.view.render().el);
				});
				this.$container.append(fragHTML);
			});
		},
		render: function(){
			this.$el.html(overviewTpl());
		},
		search: function(e){
			var currentKeyWord = this.$search.$field.val();
			if (currentKeyWord === '') {
				this.model.loadPopular();
			} else {

			}
		}
	});

	new Overview({
		model: new OverviewModel()
	});
});