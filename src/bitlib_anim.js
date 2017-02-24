bitlib.anim = function(renderCallback, fps) {

    return {
        fps: fps || 60,
        renderCallback: renderCallback,

        start: function () {
            if (!this.running) {
                this.running = true;
                this.render();
            }
            this.shouldKill = false;
            return this;
        },

        stop: function () {
            this.shouldKill = true;
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
            if(this.shouldKill) {
                this.shouldKill = false;
                this.running = false;
            }
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