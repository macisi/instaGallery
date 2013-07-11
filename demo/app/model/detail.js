/**
 * [the model of a mediaDetail]
 */
define(['backbone', '../view/detailView'], function(Backbone, DetailView) {
	
	var Detail = Backbone.Model.extend({
		initialize: function(){
			this.format();
			this.view = new DetailView({
				model: this
			});
		},
		format: function(){
			if (this.get('type') === 'image') {
				this.set('isPic', true);
			} else if (this.get('type' === 'video')) {
				this.set('isPic', false);
			}
		}
	});

	return Detail;
});