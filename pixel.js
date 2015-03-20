function pixel (R,G,B) {
	this.c = {r: R, g:G, b: B};
}

pixel.prototype.add = function(p) {

	this.c.r += p.c.r;
	this.c.g += p.c.g;
	this.c.b += p.c.b;

	this.checkRGB();

}

pixel.prototype.checkRGB = function() {

	if(this.c.r > 255){
		this.c.r = 255;
	}

	if(this.c.g > 255){
		this.c.g = 255;
	}

	if(this.c.g > 255){
		this.c.b = 255;
	}


	if(this.c.r < 0){
		this.c.r = 0;
	}

	if(this.c.g < 0 ){
		this.c.g = 0;
	}

	if(this.c.g < 0){
		this.c.b = 0;
	}

}

pixel.prototype.mult = function(k) {

	this.c.r *= k;
	this.c.g *= k;
	this.c.b *= k;

	this.checkRGB();

}

pixel.prototype.sub = function (p) {

	this.c.r -= p.c.r;
	this.c.g -= p.c.g;
	this.c.b -= p.c.b;

	this.checkRGB();

}

pixel.prototype.diff = function(p) {

	return Math.abs(this.c.r - p.c.r) + Math.abs(this.c.g - p.c.g) + Math.abs(this.c.b - p.c.b);

}