/**
 * [ the collection of photos]
 */
define(['backbone', '../model/photo'], function(Backbone, Photo){

	var Photos = Backbone.Collection.extend({
		model: Photo,
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

	return Photos;
});