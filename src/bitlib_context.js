bitlib.context = function (w, h, parent) {
    var canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d");
    if (!parent) {
        parent = document.body;
    }
    parent.appendChild(canvas);
    return canvas.getContext("2d");
};

