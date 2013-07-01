<figure>
	{{#with images.low_resolution}}
	<img src="{{url}}" alt="" width="{{width}}" height="{{height}}">
	{{/with}}
</figure>
<figcaption>
	{{#with user}}
	<img src="{{profile_picture}}" alt="{{full_name}}" width="32" height="32">{{full_name}}
	{{/with}}
</figcaption>