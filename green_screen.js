var image = null;
var imgcanvas;

function upload() {
    //get canvas
    imgcanvas = document.getElementById("can");

    //get file input
    var fileinput = document.getElementById("finput");

    //make new simple image of fileinput
    image = new SimpleImage(fileinput);

    //draw simple image on canvas
    image.drawTo(imgcanvas);
    
}