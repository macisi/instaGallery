<figure>
	{{#with images.low_resolution}}
	<img src="{{url}}" alt="" width="{{width}}" height="{{height}}" class="media">
	{{/with}}
</figure>
<figcaption>
	{{#with user}}
	<img src="{{profile_picture}}" alt="{{full_name}}" width="64" height="64">
	<p>{{full_name}}</p>
	{{/with}}
</figcaption>