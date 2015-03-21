var pictures = {
	"chicago1":"chicago_1.jpg",
	"chicago2":"chicago_2.jpg",
	"david":"david.png",
	"sanfran":"sanfran.jpg",
	"bird":"bird.jpg"

}

function pickPicture(pictureName){
	image.src = this.pictures[pictureName.value];
    animate(canvas, context, startTime);

}