/**
 * [the model of a media]
 */
define(['backbone', '../view/mediaView'], function(Backbone, MediaView) {
	
	var Media = Backbone.Model.extend({
		initialize: function(){
			console.log(this);
			this.view = new MediaView({
				model: this
			});
			this.on('change', function(model, options){
				model.update();
			});
		},
		update: function(){
			this.view.render();
		}
	});

	return Media;
});