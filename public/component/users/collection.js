/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['component/users/model', 'component/users/view'], function(UserModel, UserView){
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,

        initialize: function(){
            this.views = [];
            this.on('sync', function(collection){
                collection.each(function(model){
                    this.views.push(new UserView({
                        model: model
                    }));
                }, this);
                this.trigger('view-init', this.views);
            });
        }
    });

    return UserCollection;

});