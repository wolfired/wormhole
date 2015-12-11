var GLHelper = {};

GLHelper.WebGLRenderingContext = function () {
    "use strict";

    var canvas = document.getElementsByTagName("canvas"),
        contextAttributes = new GLHelper.WebGLContextAttributes();

    /*Shader Type*/
    this.VERTEX_SHADER = 0;
    this.FRAGMENT_SHADER = 1;

    /*Program Parameter Type*/
    this.DELETE_STATUS = 0;
    this.LINK_STATUS = 1;
    this.VALIDATE_STATUS = 2;
    this.ATTACHED_SHADERS = 3;
    this.ACTIVE_ATTRIBUTES = 4;
    this.ACTIVE_UNIFORMS = 5;

    /*Shader Parameter Type*/
    this.SHADER_TYPE = 0;
    this.DELETE_STATUS = 1;
    this.COMPILE_STATUS = 2;

    Object.defineProperty(this, "canvas", {
        get: function () {
            /*
            @return HTMLCanvasElement
            */
            return canvas;
        }
    });
    Object.defineProperty(this, "drawingBufferWidth", {
        get: function () {
            /*
            @return GLsizei
            */
            return canvas.width;
        }
    });
    Object.defineProperty(this, "drawingBufferHeight", {
        get: function () {
            /*
            @return GLsizei
            */
            return canvas.height;
        }
    });

    this.getContextAttributes = function () {
        /*
        @return WebGLContextAttributes
        */
        return contextAttributes;
    };

    /* Programs and Shaders */
    this.attachShader = function (program, shader) {
        /*
        @param program WebGLProgram
        @param shader WebGLShader
        */
    };

    this.bindAttribLocation = function (program, index, name) {
        /*
        @param program WebGLProgram
        @param index uint
        @param name string
        */
    };

    this.compileShader = function (shader) {
        /*
        @param shader WebGLShader
        */
    };

    this.createProgram = function () {
        /*
        @return WebGLProgram
        */
        return new GLHelper.WebGLProgram();
    };

    this.createShader = function (type) {
        /*
        @param type enum{
            VERTEX_SHADER, 
            FRAGMENT_SHADER
        }
        
        @return WebGLShader
        */
        return new GLHelper.WebGLShader();
    };

    this.deleteProgram = function (program) {
        /*
        @param program WebGLProgram
        */
    };

    this.deleteShader = function (shader) {
        /*
        @param shader WebGLShader
        */
    };

    this.detachShader = function (program, shader) {
        /*
        @param program WebGLProgram
        @param shader WebGLShader
        */
    };

    this.getAttachedShaders = function (program) {
        /*
        @param program WebGLProgram
        
        @return WebGLShader[]
        */

        return [];
    };

    this.getProgramParameter = function (program, pname) {
        /*
        @param program WebGLProgram
        @param pname enum{
            DELETE_STATUS
            LINK_STATUS
            VALIDATE_STATUS
            ATTACHED_SHADERS
            ACTIVE_ATTRIBUTES
            ACTIVE_UNIFORMS
        }
        
        @return any
        */

        return null;
    };

    this.getProgramInfoLog = function (program) {
        /*
        @param program WebGLProgram
        
        @return string
        */

        return "";
    };

    this.getShaderParameter = function (shader, pname) {
        /*
        @param shader WebGLShader
        @param pname enum{
            SHADER_TYPE
            DELETE_STATUS
            COMPILE_STATUS
        }
        
        @return any
        */

        return null;
    };

    this.getShaderInfoLog = function (shader) {
        /*
        @param shader WebGLShader
        
        @return string
        */

        return "";
    };

    this.getShaderSource = function (shader) {
        /*
        @param shader WebGLShader
        
        @return string
        */

        return "";
    };

    this.isProgram = function (program) {
        /*
        @param program WebGLProgram
        
        @return bool
        */

        return false;
    };

    this.isShader = function (shader) {
        /*
        @param shader WebGLShader
        
        @return bool
        */

        return false;
    };

    this.linkProgram = function (program) {
        /*
        @param program WebGLProgram
        */
    };

    this.shaderSource = function (shader, source) {
        /*
        @param shader WebGLShader
        @param source string
        */
    };

    this.useProgram = function (program) {
        /*
        @param program WebGLProgram
        */
    };

    this.validateProgram = function (program) {
        /*
        @param program WebGLProgram
        */
    };
};

GLHelper.WebGLContextAttributes = function () {
    "use strict";

    this.alpha = true;
    this.depth = true;
    this.stencil = false;
    this.antialias = true;
    this.premultipliedAlpha = true;
    this.preserveDrawingBuffer = false;

};

GLHelper.WebGLProgram = function () {
    "use strict";
};

GLHelper.WebGLShader = function () {
    "use strict";
};

var wgl = new GLHelper.WebGLRenderingContext();
