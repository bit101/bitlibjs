var context = bitlib.context();

var url = "boyhowdy.jpg";
// var url = "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx"
var image = bitlib.image(url, function(img) {
    // note: image is the same as img in this case. use either
    document.body.appendChild(img);
});


bitlib.imageData(url, function(imageData) {
    if(imageData) {
        context.canvas.width = imageData.width;
        context.canvas.height = imageData.height;
        context.putImageData(imageData, 0, 0);
    }
    context.font = "60px Arial";
    context.fillStyle = "white";
    context.fillText("CANVAS", 50, 150);
    context.strokeText("CANVAS", 50, 150);
})