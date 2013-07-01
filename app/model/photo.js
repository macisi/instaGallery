/**
 * [the model of a photo]
 */
define(['backbone', '../view/photoView'], function(Backbone, PhotoView) {
	
	var Photo = Backbone.Model.extend({
		initialize: function(){
			console.log(this);
			this.view = new PhotoView({
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

	return Photo;
});