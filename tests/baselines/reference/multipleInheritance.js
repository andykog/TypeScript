//// [multipleInheritance.ts]
class B1 {
    public x;
}

class B2 {
    public x;
}

class C extends B1, B2 { // duplicate member
}

class D1 extends B1 {
}

class D2 extends B2 {
}

class E extends D1, D2 { // nope, duplicate member
}

class N {
    public y:number;
}

class ND extends N { // any is assignable to number
    public y;
}

class Good {
    public f:() => number = function() { return 0; }
    public g() { return 0; }
}

class Baad extends Good {
    public f(): number { return 0; }
    public g(n:number) { return 0; }
}


//// [multipleInheritance.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var B1 = (function () {
    function B1() {
    }
    return B1;
})();
var B2 = (function () {
    function B2() {
    }
    return B2;
})();
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(B1);
var D1 = (function (_super) {
    __extends(D1, _super);
    function D1() {
        _super.apply(this, arguments);
    }
    return D1;
})(B1);
var D2 = (function (_super) {
    __extends(D2, _super);
    function D2() {
        _super.apply(this, arguments);
    }
    return D2;
})(B2);
var E = (function (_super) {
    __extends(E, _super);
    function E() {
        _super.apply(this, arguments);
    }
    return E;
})(D1);
var N = (function () {
    function N() {
    }
    return N;
})();
var ND = (function (_super) {
    __extends(ND, _super);
    function ND() {
        _super.apply(this, arguments);
    }
    return ND;
})(N);
var Good = (function () {
    function Good() {
        this.f = function () { return 0; };
    }
    Good.prototype.g = function () { return 0; };
    return Good;
})();
var Baad = (function (_super) {
    __extends(Baad, _super);
    function Baad() {
        _super.apply(this, arguments);
    }
    Baad.prototype.f = function () { return 0; };
    Baad.prototype.g = function (n) { return 0; };
    return Baad;
})(Good);
