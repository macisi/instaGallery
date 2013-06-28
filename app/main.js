/**
 * [The app's entry]
 * author: macisi528@gmail.com
 * date: 2013/6/28
 */
requirejs.config({
	paths: {
		zepto: '../lib/dev/zepto.min',
		underscore: '../lib/dev/underscore-min',
		backbone: '../lib/dev/backbone-min',
		handlebars: '../lib/dev/handlebars',
		text: '../lib/dev/text'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'zepto'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'zepto': {
			exports: '$'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});

require(['app/app'], function(App){

	App.initialize();

});