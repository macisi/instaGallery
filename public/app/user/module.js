/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template', 'component/posts/collection', 'component/users/collection'], function(tpl, PostCollection, UserCollection){
    'use strict';

    var User = Backbone.View.extend({

        template: tpl.user,

        events: {
        },

        initialize: function(options){
            this.render(true);

            var url, lists, config = {};

            switch(options.type) {
                case 'follows':
                    lists = UserCollection;
                    url = 'https://api.instagram.com/v1/users/' + options.uid + '/follows';
                    break;
                case 'followed':
                    lists = UserCollection;
                    url = 'https://api.instagram.com/v1/users/' + options.uid + '/followed-by';
                    break;
                case 'post':
                    default:
                    lists = PostCollection;
                    url = 'https://api.instagram.com/v1/users/' + options.uid + '/media/recent/';
                    config.count = 100;
                    break;
            }

            this.lists = new (lists.extend({
                url: url
            }))();

            this.listenTo(this.lists, 'view-init', this.renderListItem);

            this.getListData(config);
        },

        render: function(isNew){
            this.$el.html(this.template());
            isNew && $('#main').append(this.$el);
        },

        getListData: function(config){
            this.lists.fetch({
                reset: true,
                data: config
            });
        },

        renderListItem: function(views){
            this.currentViews = views;
            var postEls = views.map(function(view){
                return view.el;
            });
            this.$el.find('#container').empty().append(postEls);
        }

    });

    return User;

});