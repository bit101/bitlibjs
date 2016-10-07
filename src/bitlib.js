(function() {
    var bitlib = {};

${bitlib_math}

${bitlib_context}

${bitlib_color}

${bitlib_random}

${bitlib_anim}


    if (typeof define === "function" && define.amd) {
        define(bitlib);
    } else {
        window.bitlib = bitlib;
    }

})();