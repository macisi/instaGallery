/**
 * [define the overview model]
 */
define(['backbone', '../collection/photos'], function(Backbone, Photos){

	var OverviewModel = Backbone.Model.extend({
		initialize: function(){
			this.photos = new Photos();
		},
		loadPopular: function(){
			this.photos.url = App.instagram.host + App.instagram.apis.popular;
			this.photos.fetch({
				data: {
					client_id: App.instagram.client_id
				},
				dataType: 'jsonp'
			});
		}
	});

	return OverviewModel;
});