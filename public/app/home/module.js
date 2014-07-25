/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template', 'component/posts/collection', 'component/users/collection'], function(tpl, PostCollection, UserCollection){
    'use strict';

    var Home = Backbone.View.extend({

        template: tpl.home,

        threshold: 5,

        renderCache: [],

        renderCount: 0,

        events: {
            'change .user-search': 'searchUsers',
            'change .post-size-field': 'changeMediaSize',
            'click .more': 'loadMore'
        },

        initialize: function(){
            this.render(true);

            this.popularPosts = new (PostCollection.extend({
                url: 'https://api.instagram.com/v1/media/popular'
            }))();

            this.users = new (UserCollection.extend({
                url: 'https://api.instagram.com/v1/users/search'
            }))();

            this.listenTo(this.popularPosts, 'view-add', this.renderListItem.bind(this, this.popularPosts));
            this.listenTo(this.users, 'view-add', this.renderListItem.bind(this, this.users));

            this.on('remove', this.reset);

            this.getPopularPost();
        },

        render: function(isNew){
            this.$el.html(this.template());
            isNew && $('#main').append(this.$el);
        },

        getPopularPost: function(){
            this.popularPosts.fetch({
                reset: true
            });

        },

        searchUsers: function(e){
            var value = e.target.value;
            if (value) {
                this.$el.find('#container').empty();
                this.users.fetch({
                    data: {
                        q: value
                    },
                    reset: true
                });
            } else {
                this.getPopularPost();
            }
        },

        renderListItem: function(list, view){
            if (this.currentList && this.currentList !== list) {
                this.$el.find('#container').empty();
                this.reset();
            }
            this.currentList = list;

            this.renderCache.push(view.el);
            if (this.renderCache.length >= this.threshold || list.length - this.renderCount < this.threshold) {
                this.$el.find('#container').append(this.renderCache);
                this.renderCount += this.renderCache.length;
                this.renderCache = [];
            }
        },

        changeMediaSize: function(e){
//            this.currentViews.forEach(function(view){
//                view.setSize && view.setSize(e.target.value);
//            });
        },

        updatePagination: function(pagination){
            if (pagination.next_url) {
                this.$el.addClass('has-more');
            } else {
                this.$el.removeClass('has-more');
            }
        },

        reset: function(){
            this.renderCache = [];
            this.renderCount = 0;
        },

        loadMore: function(e){
            e.preventDefault();
            this.currentList.trigger('next');
        }

    });

    return Home;

});