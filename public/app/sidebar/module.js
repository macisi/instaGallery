/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['backbone', 'component/profile/view', 'component/profile/model'], function(Backbone, ProfileView, ProfileModel){
    'use strict';

    var SideBar = Backbone.View.extend({

        el: "#sidebar",

        initialize: function(options){
            this.getProfile(options.uid || VG.uid);
        },

        getProfile: function(uid){
            new ProfileView({
                el: this.$el.find('.profile'),
                model: new ProfileModel({
                    id: uid
                })
            });
        }

    });

    return SideBar;

});