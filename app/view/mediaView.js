/**
 * [the view of a media]
 */
define(['backbone', 'handlebars', 'text!template/media.tpl', '../model/detail'], function(Backbone, Handlebars, mediaTpl, Detail) {
	
	var MediaView = Backbone.View.extend({
		template: Handlebars.compile(mediaTpl),
		className: 'item',
		events: {
			"click .media": "showMediaDetail"
		},
		initialize: function(){
		},
		render: function(){
			this.$el.html(this.template(this.model.attributes));
			return this;
		},
		showMediaDetail: function(e){
			if (this.details) {
				this.details.view.render();
			} else {
				this.details = new Detail(this.model.attributes)
			}
		}
	});

	return MediaView;
});