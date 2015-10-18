//// [baseCheck.ts]
class C { constructor(x: number, y: number) { } }
class ELoc extends C {
    constructor(x: number) {
        super(0, x);
    }
}
class ELocVar extends C {  
    constructor(x: number) {
        super(0, loc);
    }

    m() {
        var loc=10;
    }
}

class D extends C { constructor(public z: number) { super(this.z) }  } // too few params
class E extends C { constructor(public z: number) { super(0, this.z) } }
class F extends C { constructor(public z: number) { super("hello", this.z) } } // first param type

function f() {
    if (x<10) {
      x=11;
    }
    else {
        x=12;
    }
}


//// [baseCheck.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function () {
    function C(x, y) {
    }
    return C;
})();
var ELoc = (function (_super) {
    __extends(ELoc, _super);
    function ELoc(x) {
        _super.call(this, 0, x);
    }
    return ELoc;
})(C);
var ELocVar = (function (_super) {
    __extends(ELocVar, _super);
    function ELocVar(x) {
        _super.call(this, 0, loc);
    }
    ELocVar.prototype.m = function () {
        var loc = 10;
    };
    return ELocVar;
})(C);
var D = (function (_super) {
    __extends(D, _super);
    function D(z) {
        _super.call(this, this.z);
        this.z = z;
    }
    return D;
})(C); // too few params
var E = (function (_super) {
    __extends(E, _super);
    function E(z) {
        _super.call(this, 0, this.z);
        this.z = z;
    }
    return E;
})(C);
var F = (function (_super) {
    __extends(F, _super);
    function F(z) {
        _super.call(this, "hello", this.z);
        this.z = z;
    }
    return F;
})(C); // first param type
function f() {
    if (x < 10) {
        x = 11;
    }
    else {
        x = 12;
    }
}
