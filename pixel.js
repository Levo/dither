function pixel (R,G,B) {
	this.c = {r:R, g:G, b: B};
}

pixel.prototype.add = function(p) {
	var returnP = new pixel();

	returnP.c.r = this.c.r + p.c.r;
	returnP.c.g = this.c.g + p.c.g;
	returnP.c.b = this.c.b + p.c.b;

	this.checkRGB(returnP);

	return returnP;
}

pixel.prototype.checkRGB = function(pixel) {

	if(pixel.c.r > 255){
		pixel.c.r = 255;
	}

	if(pixel.c.g > 255){
		pixel.c.g = 255;
	}

	if(pixel.c.g > 255){
		pixel.c.b = 255;
	}


	if(pixel.c.r < 0){
		pixel.c.r = 0;
	}

	if(pixel.c.g < 0 ){
		pixel.c.g = 0;
	}

	if(pixel.c.g < 0){
		pixel.c.b = 0;
	}

}

pixel.prototype.mult = function(k) {

	var returnP = new pixel();

	returnP.c.r = this.c.r * k;
	returnP.c.g = this.c.g * k;
	returnP.c.b = this.c.b * k;

	this.checkRGB(returnP);

	return returnP;

}

pixel.prototype.sub = function (p) {

	var returnP = new pixel();

	returnP.c.r = this.c.r - p.c.r;
	returnP.c.g = this.c.g - p.c.g;
	returnP.c.b = this.c.b - p.c.b;

	this.checkRGB(returnP);

	return returnP;

}

pixel.prototype.diff = function(p) {
	var redDiff = this.c.r - p.c.r;
	var greenDiff = this.c.g - p.c.g;
	var blueDiff = this.c.b - p.c.b;

	return (redDiff*redDiff) + (greenDiff*greenDiff) + (blueDiff*blueDiff) ;

}