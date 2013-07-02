/**
 * [the detailView of a photo]
 */
define(['backbone', 'handlebars', 'text!template/detail.tpl'], function(Backbone, Handlebars, detailTpl) {
	
	var DetailView = Backbone.View.extend({
		el: 'aside#aside',
		template: Handlebars.compile(detailTpl),
		events: {
			"blur aside": "hide"
		},
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model.attributes))
				.addClass("show").focus();
		},
		hide: function(){
			this.$el.removeClass("show");
		}
	});

	return DetailView;
});