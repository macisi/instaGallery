/**
 * [define the overview model]
 */
define(['backbone', '../collection/medias'], function(Backbone, Medias){

	var OverviewModel = Backbone.Model.extend({
		initialize: function(){
			this.medias = new Medias();
		},
		loadPopular: function(reset){
			this.medias.url = App.instagram.host + App.instagram.apis.media.popular;
			this.medias.fetch({
				data: {
					client_id: App.instagram.client_id
				},
				dataType: 'jsonp',
				reset: reset
			});
		}
	});

	return OverviewModel;
});