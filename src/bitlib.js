(function() {
    var bitlib = {};

${bitlib_math}

${bitlib_canvas}

${bitlib_context}

${bitlib_color}

${bitlib_random}



    if (typeof define === "function" && define.amd) {
        define(bitlib);
    } else {
        window.bitlib = bitlib;
    }

})();