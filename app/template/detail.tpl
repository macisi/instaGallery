{{#if isPic}}
{{#with images.standard_resolution}}
<img src="{{url}}" width="{{width}}" height="{{height}}" alt="">
{{/with}}
{{else}}
{{#with videos.standard_resolution}}
<video src="{{url}}" width="{{width}}" height="{{height}}"></video>
{{/with}}
{{/if}}
{{#with user}}
<div class="meta">
	<img src="{{profile_picture}}" alt="{{full_name}}" class="avatar" width="64" height="64">
	<p>{{full_name}}</p>
</div>
{{/with}}