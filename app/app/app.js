/**
 * [Set the rooter and initialize of the app]
 */
define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({
		routers: {}
	});

	var App = {
		initialize: function(){
			var router = new Router();
			Backbone.history.start({
				pushState: true
			});
			require(['view/overview']);
		},
		instagram: {
			// client_id: 'e9f7eb8ef02d47838b642a0c42e9acf0',
			client_id: 'b506641d0fc2438eb7fed9471daf4565',
			host: 'https://api.instagram.com/v1',
			apis: {
				media: { 
					'media-id': '/media/',
					popular: '/media/popular'
				},
				users: {
					'user-id': '/users/',
					recent: ['/users/', '/media/recent'],
					search: '/users/search'
				},
				tags: {
					'tag-name': 'tags/tag-name',
					recent: ['/tags/', '/media/recent'],
					search: '/tags/search'
				}
			}
		}
	};

	window.App = App;

	return App;
})