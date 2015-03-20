var palette = [
      	new pixel(  0,   0,   0),
        new pixel(  0,   0, 255),
        new pixel(  0, 255,   0),
        new pixel(  0, 255, 255),
        new pixel(255,   0,   0),
        new pixel(255, 255,   0),
        new pixel(255, 255, 255)
	];


function find_closest_palette_color(oldpixel){

	var closest = palette[0];
	
	for(var i = 1; i < palette.length; i++){
		if(palette[i].diff(oldpixel) < closest.diff(oldpixel)){
			closest = palette[i];
		}
	}

	return closest;

}


