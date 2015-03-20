var palette = [
	new pixel(0,0,0),
	new pixel(255,255,255)
	];


function find_closest_palette_color(oldpixel){

	var closest = palette[0];
	
	for(var i = 0; i < palette.length; i++){
		if(palette[i].diff(oldpixel) < closest.diff(oldpixel)){
			closest = palette[i];
		}
	}

	return closest;

}


