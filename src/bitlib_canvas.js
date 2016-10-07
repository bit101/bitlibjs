bitlib.canvas = {
    create: function (w, h, parent) {
        var obj = Object.create(this);
        obj.init(w, h, parent);
        return obj;
    },

    init: function (w, h, parent) {
        this.w = w || 600;
        this.h = h || 600;
        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.context = this.canvas.getContext("2d");
        if (!parent) {
            parent = document.body;
        }
        parent.appendChild(this.canvas);
    }
};
