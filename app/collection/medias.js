/**
 * [ the collection of media]
 */
define(['backbone', '../model/media'], function(Backbone, Media){

	var Medias = Backbone.Collection.extend({
		model: Media,
		initialize: function(){
			this.on('change', function(model, options){
				console.log(this, model, options)
			});
			this.on('sync', function(model, resp, options){
				if (resp.meta.code === 200) {
					this.reset(resp.data)
				} else {
					alert(resp.meta.error_message);
				}
			});
		}
	});

	return Medias;
});