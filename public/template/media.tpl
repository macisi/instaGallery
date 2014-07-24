<section class="media-post">
    {{#if isImage}}
        {{#with images}}
        <img src="{{standard_resolution.url}}" alt="" width="{{standard_resolution.width}}" height="{{standard_resolution.height}}">
        {{/with}}
    {{else}}
        {{#with videos}}
        <video src="{{standard_resolution.url}}" width="{{standard_resolution.width}}" height="{{standard_resolution.height}}" autoplay="autoplay"></video>
        {{/with}}
    {{/if}}
    <div class="meta">
        {{#with user}}
            <img src="{{profile_picture}}" alt="" width="75" height="75">
            <a data-href="/user/post/{{id}}" href="/user/post/{{id}}">{{username}}</a>
        {{/with}}
    </div>
</section>
