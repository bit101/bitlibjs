bitlib.anim = function(fps, renderCallback) {

    return {
        fps: fps,
        renderCallback: renderCallback,

        start: function () {
            if (!this.running) {
                this.running = true;
                this.render();
            }
        },

        stop: function () {
            this.running = false;
        },

        toggle: function () {
            if (this.running) {
                this.stop();
            }
            else {
                this.start();
            }
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
    }
}