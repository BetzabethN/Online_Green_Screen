var fgImage = null;
var bgImage = null;
var can1;
var can2;

//show foreground image in canvas 1
function loadForegroundImage() {
    var imgFile = document.getElementById("fgfile");
    fgImage = new SimpleImage(imgFile)
    can1 = document.getElementById("can-F");
    fgImage.drawTo(can1)
}

//show background image in canvas 2
function loadBackgroundImage() {
    var imgFile2 = document.getElementById("bgfile");
    bgImage = new SimpleImage(imgFile2);
    can2 = document.getElementById("can-B");
    bgImage.drawTo(can2);

}

function clearCanvas() {
    doClear(can1);
    doClear(can2);
}

function doClear(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
  }

function greenScreen() {
    //check if foreground image is loaded or completely finished loaded
    if (fgImage == null || !fgImage.complete()) {
        alert("Foreground not loaded!");
    }
    //check if background image is loaded or completely finished loaded
    if (bgImage == null || !bgImage.complete()) {
        alert("Background not loaded!");
    }
    clearCanvas();

    // creat new image that will be composite
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

    //go through every pixel of the foreground image
    for (var pixel of fgImage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        //check if pixel is green in order to replace with background
        if (pixel.getGreen() > 240) {
            var bgPixel = bgImage.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        }
        //if it is not green, it stays the same
        else {
            output.setPixel(x, y, pixel);
        }
    }

    //show composite on canvas 1
    output.drawTo(can1);
}

