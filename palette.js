function palette (){

	this.p = [
      	new pixel(  0,   0,   0),
      	new pixel(  255,   0,   0),
      	new pixel(  0,   0,   255),
      	new pixel(  0,   255,   0),
        new pixel(255, 255, 255)

	];

}

palette.prototype.find_closest_palette_color = function (oldpixel){

	var closest = this.p[0];
	
	for(var i = 1; i < this.p.length; i++){
		if(this.p[i].diff(oldpixel) < closest.diff(oldpixel)){
			closest = this.p[i];
		}
	}

	return closest;

}

palette.prototype.setPaletteBW = function(){
	this.p = [
      	new pixel(  0,   0,   0),
        new pixel(255, 255, 255)
	];
    animate(canvas, context, startTime);
}


palette.prototype.setPaletteBWRGB = function(){
	this.p = [
      	new pixel(  0,   0,   0),
        new pixel(255,   0,   0),
        new pixel(  0, 255,   0),
        new pixel(  0,   0, 255),
        new pixel(255, 255, 255)
	];
    animate(canvas, context, startTime);
}


palette.prototype.setPaletteRGB = function(){
	this.p = [
        new pixel(255,   0,   0),
        new pixel(  0, 255,   0),
        new pixel(  0,   0, 255),
	];
    animate(canvas, context, startTime);
}

palette.prototype.setPalette3bit = function(){
	this.p = [
        new pixel(  0,   0,   0),
        new pixel(255,   0,   0),
        new pixel(  0, 255,   0),
        new pixel(  0,   0, 255),
        new pixel(255, 255, 255),
        new pixel(255, 255,   0),
        new pixel( 0, 255,  255),
        new pixel( 255, 0,  255)

	];
    animate(canvas, context, startTime);
}


palette.prototype.addColor = function(R,G,B){
	var r = R;
	var g = G;
	var b = B;

	if(r > 255){
		r = 255;
	}
	if(r < 0 ){
		r = 0;
	}
	if(g > 255){
		g = 255;
	}
	if(g < 0){
		g = 0;
	}
	if(b > 255){
		b = 255;
	}
	if(b < 0){
		b = 0;
	}

	var newPixel = new pixel(r,g,b);
	this.p.push(newPixel);
    animate(canvas, context, startTime);
}

function pickPalette(paletteName){

	var paletteString = paletteName.value.toString();

	if(paletteString === "BW"){
		palette.setPaletteBW();
	}else if(paletteString === "BWRGB"){
		palette.setPaletteBWRGB();
	}else if(paletteString === "RGB"){
		palette.setPaletteRGB();
	}else if(paletteString === "3bit"){
		palette.setPalette3bit();
	}
    animate(canvas, context, startTime);	
}




