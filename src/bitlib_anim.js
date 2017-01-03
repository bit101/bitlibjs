bitlib.anim = function(renderCallback, fps) {

    return {
        fps: fps || 60,
        renderCallback: renderCallback,

        start: function () {
            if (!this.running) {
                this.running = true;
                this.render();
            }
            return this;
        },

        stop: function () {
            this.running = false;
            return this;
        },

        toggle: function () {
            if (this.running) {
                this.stop();
            }
            else {
                this.start();
            }
            return this;
        },

        render: function () {
            if (this.running) {
                if (this.renderCallback) {
                    this.renderCallback();
                }
                var self = this;
                setTimeout(function () {
                    requestAnimationFrame(function () {
                        self.render();
                    });
                }, 1000 / this.fps);
            }
        }
    };
}