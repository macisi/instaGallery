/**
 * [the view of a photo]
 */
define(['backbone', 'handlebars', 'text!template/photo.tpl'], function(Backbone, Handlebars, photoTpl) {
	
	var PhotoView = Backbone.View.extend({
		template: Handlebars.compile(photoTpl),
		className: 'item',
		initialize: function(){
		},
		render: function(){
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	return PhotoView;
});