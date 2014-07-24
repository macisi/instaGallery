<p class="username">{{username}} - {{full_name}}</p>
<img class="avatar" src="{{profile_picture}}" alt="" width="150" height="150">
<p class="bio">{{bio}}</p>
<div class="counts">
    <a data-href="/user/followed/{{id}}" href="/user/followed/{{id}}" class="followed"><b>followed:</b> {{counts.followed_by}}</a>
    <a data-href="/user/follows/{{id}}" href="/user/follows/{{id}}" class="follows"><b>follows:</b> {{counts.follows}}</a>
    <a data-href="/user/post/{{id}}" href="/user/post/{{id}}" class="post"><b>post:</b> {{counts.media}}</a>
</div>
