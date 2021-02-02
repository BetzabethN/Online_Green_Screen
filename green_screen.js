function upload() {
    //get canvas
    var imgcanvas = document.getElementById("can");

    //get file input
    var fileinput = document.getElementById("finput");

    //make new simple image of fileinput
    var image = new SimpleImage(fileinput);

    //draw simple image on canvas
    image.drawTo(imgcanvas);
    
}