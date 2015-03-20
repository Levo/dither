var palette = [
	new pixel(0,0,0), 		// White
	new pixel(255,255,255)  // Black
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


