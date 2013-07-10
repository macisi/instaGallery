/**
 * [the overview's view]
 */
define(['backbone', 'model/overviewModel', 'handlebars', 'text!template/overview.tpl'], function(Backbone, OverviewModel, Handlebars, overviewTpl){

	overviewTpl = Handlebars.compile(overviewTpl);

	var Overview = Backbone.View.extend({
		el: 'body',
		events: {
			'click #search-btn': 'search',
			'click #load-more': "loadMore"
		},
		initialize: function(){
			
			this.render();
			this.$search = {
				$field: this.$el.find('#search-field'),
				$btn: this.$el.find('#search-btn')
			};
			this.$container = this.$('#container');
			this.$stage = this.$('#stage');

			this.currentKeyWord = {
				keyWord: ""
			};

			this.search();

			//render media items
			this.listenTo(this.model.medias, 'reset', function(collection, options){
				var fragHTML = [];
				collection.forEach(function(model){
					fragHTML.push(model.view.render().el);
				});
				this.$stage.empty().append(fragHTML);
			});
			//add the item
			this.listenTo(this.model.medias, "add", function(model, collection, options){
				this.$stage.append(model.view.render().el)
			});
		},
		render: function(){
			this.$el.html(overviewTpl());
		},
		search: function(e){
			//clear the stage and search the current key word
			this.currentKeyWord.keyWord = this.$search.$field.val();
			if (this.currentKeyWord.keyWord === '') {
				this.model.loadPopular(true);
			} else {

			}
		},
		loadMore: function(e){
			e.preventDefault();
			// load more pics
			if (this.currentKeyWord.keyWord === '' && this.model.medias.length > 0) {
				this.model.loadPopular(false);
			} else {

			}
		}
	});

	new Overview({
		model: new OverviewModel()
	});
});