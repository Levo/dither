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


palette.prototype.setPaletteGreen = function(){
	this.p = [
		new pixel(0,0, 0),
		new pixel(0,1, 0),
		new pixel(0,2, 0),
		new pixel(0,3, 0),
		new pixel(0,4, 0),
		new pixel(0,5, 0),
		new pixel(0,6, 0),
		new pixel(0,7, 0),
		new pixel(0,8, 0),
		new pixel(0,9, 0),
		new pixel(0,10, 0),
		new pixel(0,11, 0),
		new pixel(0,12, 0),
		new pixel(0,13, 0),
		new pixel(0,14, 0),
		new pixel(0,15, 0),
		new pixel(0,16, 0),
		new pixel(0,17, 0),
		new pixel(0,18, 0),
		new pixel(0,19, 0),
		new pixel(0,20, 0),
		new pixel(0,21, 0),
		new pixel(0,22, 0),
		new pixel(0,23, 0),
		new pixel(0,24, 0),
		new pixel(0,25, 0),
		new pixel(0,26, 0),
		new pixel(0,27, 0),
		new pixel(0,28, 0),
		new pixel(0,29, 0),
		new pixel(0,30, 0),
		new pixel(0,31, 0),
		new pixel(0,32, 0),
		new pixel(0,33, 0),
		new pixel(0,34, 0),
		new pixel(0,35, 0),
		new pixel(0,36, 0),
		new pixel(0,37, 0),
		new pixel(0,38, 0),
		new pixel(0,39, 0),
		new pixel(0,40, 0),
		new pixel(0,41, 0),
		new pixel(0,42, 0),
		new pixel(0,43, 0),
		new pixel(0,44, 0),
		new pixel(0,45, 0),
		new pixel(0,46, 0),
		new pixel(0,47, 0),
		new pixel(0,48, 0),
		new pixel(0,49, 0),
		new pixel(0,50, 0),
		new pixel(0,51, 0),
		new pixel(0,52, 0),
		new pixel(0,53, 0),
		new pixel(0,54, 0),
		new pixel(0,55, 0),
		new pixel(0,56, 0),
		new pixel(0,57, 0),
		new pixel(0,58, 0),
		new pixel(0,59, 0),
		new pixel(0,60, 0),
		new pixel(0,61, 0),
		new pixel(0,62, 0),
		new pixel(0,63, 0),
		new pixel(0,64, 0),
		new pixel(0,65, 0),
		new pixel(0,66, 0),
		new pixel(0,67, 0),
		new pixel(0,68, 0),
		new pixel(0,69, 0),
		new pixel(0,70, 0),
		new pixel(0,71, 0),
		new pixel(0,72, 0),
		new pixel(0,73, 0),
		new pixel(0,74, 0),
		new pixel(0,75, 0),
		new pixel(0,76, 0),
		new pixel(0,77, 0),
		new pixel(0,78, 0),
		new pixel(0,79, 0),
		new pixel(0,80, 0),
		new pixel(0,81, 0),
		new pixel(0,82, 0),
		new pixel(0,83, 0),
		new pixel(0,84, 0),
		new pixel(0,85, 0),
		new pixel(0,86, 0),
		new pixel(0,87, 0),
		new pixel(0,88, 0),
		new pixel(0,89, 0),
		new pixel(0,90, 0),
		new pixel(0,91, 0),
		new pixel(0,92, 0),
		new pixel(0,93, 0),
		new pixel(0,94, 0),
		new pixel(0,95, 0),
		new pixel(0,96, 0),
		new pixel(0,97, 0),
		new pixel(0,98, 0),
		new pixel(0,99, 0),
		new pixel(0,100, 0),
		new pixel(0,101, 0),
		new pixel(0,102, 0),
		new pixel(0,103, 0),
		new pixel(0,104, 0),
		new pixel(0,105, 0),
		new pixel(0,106, 0),
		new pixel(0,107, 0),
		new pixel(0,108, 0),
		new pixel(0,109, 0),
		new pixel(0,110, 0),
		new pixel(0,111, 0),
		new pixel(0,112, 0),
		new pixel(0,113, 0),
		new pixel(0,114, 0),
		new pixel(0,115, 0),
		new pixel(0,116, 0),
		new pixel(0,117, 0),
		new pixel(0,118, 0),
		new pixel(0,119, 0),
		new pixel(0,120, 0),
		new pixel(0,121, 0),
		new pixel(0,122, 0),
		new pixel(0,123, 0),
		new pixel(0,124, 0),
		new pixel(0,125, 0),
		new pixel(0,126, 0),
		new pixel(0,127, 0),
		new pixel(0,128, 0),
		new pixel(0,129, 0),
		new pixel(0,130, 0),
		new pixel(0,131, 0),
		new pixel(0,132, 0),
		new pixel(0,133, 0),
		new pixel(0,134, 0),
		new pixel(0,135, 0),
		new pixel(0,136, 0),
		new pixel(0,137, 0),
		new pixel(0,138, 0),
		new pixel(0,139, 0),
		new pixel(0,140, 0),
		new pixel(0,141, 0),
		new pixel(0,142, 0),
		new pixel(0,143, 0),
		new pixel(0,144, 0),
		new pixel(0,145, 0),
		new pixel(0,146, 0),
		new pixel(0,147, 0),
		new pixel(0,148, 0),
		new pixel(0,149, 0),
		new pixel(0,150, 0),
		new pixel(0,151, 0),
		new pixel(0,152, 0),
		new pixel(0,153, 0),
		new pixel(0,154, 0),
		new pixel(0,155, 0),
		new pixel(0,156, 0),
		new pixel(0,157, 0),
		new pixel(0,158, 0),
		new pixel(0,159, 0),
		new pixel(0,160, 0),
		new pixel(0,161, 0),
		new pixel(0,162, 0),
		new pixel(0,163, 0),
		new pixel(0,164, 0),
		new pixel(0,165, 0),
		new pixel(0,166, 0),
		new pixel(0,167, 0),
		new pixel(0,168, 0),
		new pixel(0,169, 0),
		new pixel(0,170, 0),
		new pixel(0,171, 0),
		new pixel(0,172, 0),
		new pixel(0,173, 0),
		new pixel(0,174, 0),
		new pixel(0,175, 0),
		new pixel(0,176, 0),
		new pixel(0,177, 0),
		new pixel(0,178, 0),
		new pixel(0,179, 0),
		new pixel(0,180, 0),
		new pixel(0,181, 0),
		new pixel(0,182, 0),
		new pixel(0,183, 0),
		new pixel(0,184, 0),
		new pixel(0,185, 0),
		new pixel(0,186, 0),
		new pixel(0,187, 0),
		new pixel(0,188, 0),
		new pixel(0,189, 0),
		new pixel(0,190, 0),
		new pixel(0,191, 0),
		new pixel(0,192, 0),
		new pixel(0,193, 0),
		new pixel(0,194, 0),
		new pixel(0,195, 0),
		new pixel(0,196, 0),
		new pixel(0,197, 0),
		new pixel(0,198, 0),
		new pixel(0,199, 0),
		new pixel(0,200, 0),
		new pixel(0,201, 0),
		new pixel(0,202, 0),
		new pixel(0,203, 0),
		new pixel(0,204, 0),
		new pixel(0,205, 0),
		new pixel(0,206, 0),
		new pixel(0,207, 0),
		new pixel(0,208, 0),
		new pixel(0,209, 0),
		new pixel(0,210, 0),
		new pixel(0,211, 0),
		new pixel(0,212, 0),
		new pixel(0,213, 0),
		new pixel(0,214, 0),
		new pixel(0,215, 0),
		new pixel(0,216, 0),
		new pixel(0,217, 0),
		new pixel(0,218, 0),
		new pixel(0,219, 0),
		new pixel(0,220, 0),
		new pixel(0,221, 0),
		new pixel(0,222, 0),
		new pixel(0,223, 0),
		new pixel(0,224, 0),
		new pixel(0,225, 0),
		new pixel(0,226, 0),
		new pixel(0,227, 0),
		new pixel(0,228, 0),
		new pixel(0,229, 0),
		new pixel(0,230, 0),
		new pixel(0,231, 0),
		new pixel(0,232, 0),
		new pixel(0,233, 0),
		new pixel(0,234, 0),
		new pixel(0,235, 0),
		new pixel(0,236, 0),
		new pixel(0,237, 0),
		new pixel(0,238, 0),
		new pixel(0,239, 0),
		new pixel(0,240, 0),
		new pixel(0,241, 0),
		new pixel(0,242, 0),
		new pixel(0,243, 0),
		new pixel(0,244, 0),
		new pixel(0,245, 0),
		new pixel(0,246, 0),
		new pixel(0,247, 0),
		new pixel(0,248, 0),
		new pixel(0,249, 0),
		new pixel(0,250, 0),
		new pixel(0,251, 0),
		new pixel(0,252, 0),
		new pixel(0,253, 0),
		new pixel(0,254, 0)
	];
	animate(canvas, context, startTime);
}

palette.prototype.setPaletteGreen25 = function(){
	this.p = [
		new pixel(0,0, 0),
		new pixel(0,10, 0),
		new pixel(0,20, 0),
		new pixel(0,30, 0),
		new pixel(0,40, 0),
		new pixel(0,50, 0),
		new pixel(0,60, 0),
		new pixel(0,70, 0),
		new pixel(0,80, 0),
		new pixel(0,90, 0),
		new pixel(0,100, 0),
		new pixel(0,110, 0),
		new pixel(0,120, 0),
		new pixel(0,130, 0),
		new pixel(0,140, 0),
		new pixel(0,150, 0),
		new pixel(0,160, 0),
		new pixel(0,170, 0),
		new pixel(0,180, 0),
		new pixel(0,190, 0),
		new pixel(0,200, 0),
		new pixel(0,210, 0),
		new pixel(0,220, 0),
		new pixel(0,230, 0),
		new pixel(0,240, 0),
		new pixel(0,250, 0),
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




