/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template', 'component/posts/collection', 'component/users/collection'], function(tpl, PostCollection, UserCollection){
    'use strict';

    var User = Backbone.View.extend({

        template: tpl.user,

        threshold: 20,

        renderCache: [],

        renderCount: 0,

        events: {
            'click .more': 'loadMore'
        },

        initialize: function(options){
            this.render(true);

            var url, lists;

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
                    break;
            }

            this.lists = new (lists.extend({
                url: url
            }))();

            this.listenTo(this.lists, 'view-add', this.renderListItem);

            this.listenTo(this.lists, 'pagination', this.updatePagination);

            this.on('remove', this.reset);

            this.getListData();
        },

        render: function(isNew){
            this.$el.html(this.template());
            isNew && $('#main').append(this.$el);
        },

        getListData: function(){
            this.lists.fetch({
                reset: true
            });
            this.reset();
        },

        renderListItem: function(view){
            this.renderCache.push(view.el);
            if (this.renderCache.length >= this.threshold || this.lists.length - this.renderCount < this.threshold) {
                this.$el.find('#container').append(this.renderCache);
                this.renderCount += this.renderCache.length;
                this.renderCache = [];
            }
        },

        reset: function(){
            this.renderCache = [];
            this.renderCount = 0;
        },

        updatePagination: function(pagination){
            if (pagination && pagination.next_url) {
                this.$el.addClass('has-more');
            } else {
                this.$el.removeClass('has-more');
            }
        },

        loadMore: function(e){
            e.preventDefault();
            this.lists.trigger('next');
        }

    });

    return User;

});