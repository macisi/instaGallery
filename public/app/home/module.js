/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template', 'component/posts/collection', 'component/users/collection'], function(tpl, PostCollection, UserCollection){
    'use strict';

    var Home = Backbone.View.extend({

        template: tpl.home,

        events: {
            'change .user-search': 'searchUsers',
            'change .post-size-field': 'changeMediaSize'
        },

        initialize: function(){
            this.render(true);

            this.popularPosts = new (PostCollection.extend({
                url: 'https://api.instagram.com/v1/media/popular'
            }))();

            this.users = new (UserCollection.extend({
                url: 'https://api.instagram.com/v1/users/search'
            }))();

            this.listenTo(this.popularPosts, 'view-init', this.renderListItem);
            this.listenTo(this.users, 'view-init', this.renderListItem);

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

        renderListItem: function(views){
            this.currentViews = views;
            var postEls = views.map(function(view){
                return view.el;
            });
            this.$el.find('#container').empty().append(postEls);
        },

        changeMediaSize: function(e){
            this.currentViews.forEach(function(view){
                view.setSize && view.setSize(e.target.value);
            });
        }
    });

    return Home;

});