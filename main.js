var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{

fabric.Image.fromURL ('mensagem.png', function (Img){

blockImageObject = Img;

blockImageObject.scaleToWidth(550);

blockImageObject.scaleToHeight(360);

blockImageObject.set({

top:0,

left:0

});
canvas.add(blockImageObject);
});
	
}


function playSound(){

        x.play();
        
}
