bitlib.image = function(url, callback) {
    var img = document.createElement("img");
    img.addEventListener("load", function() {
        callback(img);
    });
    img.src = url;
    return img;
}

bitlib.imageData = function(url, callback) {
    var image = bitlib.image(url, function() {
        var w = image.width,
            h = image.height,
            canvas = document.createElement("canvas"),
            context = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = h;
        context.drawImage(image, 0, 0);
        try {
            callback(context.getImageData(0, 0, w, h));
        }
        catch(e) {
            console.log(e.message);
            callback(null);
        }
    });
}