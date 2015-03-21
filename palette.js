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


palette.prototype.setPaletteFlat = function(){
	this.p = [
		new pixel(26, 188, 156),
		new pixel(22, 160, 133),
		new pixel(46, 204, 113),
		new pixel(39, 174, 96),
		new pixel(52, 152, 219),
		new pixel(41, 128, 185),
		new pixel(155, 89, 182),
		new pixel(142, 68, 173),
		new pixel(52, 73, 94),
		new pixel(44, 62, 80),
		new pixel(241, 196, 15),
		new pixel(243, 156, 18),
		new pixel(230, 126, 34),
		new pixel(211, 84, 0),
		new pixel(231, 76, 60),
		new pixel(192, 57, 43),
		new pixel(236, 240, 241),
		new pixel(189, 195, 199),
		new pixel(149, 165, 166), 
		new pixel(127, 140, 141)

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
	}else if(paletteString === "Flat"){
		palette.setPaletteFlat();
	}
    animate(canvas, context, startTime);	
}




