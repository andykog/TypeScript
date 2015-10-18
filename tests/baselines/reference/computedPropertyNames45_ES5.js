//// [computedPropertyNames45_ES5.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    get ["get1"]() { return new Foo }
}

class D extends C {
    // No error when the indexer is in a class more derived than the computed property
    [s: string]: Foo2;
    set ["set1"](p: Foo) { }
}

//// [computedPropertyNames45_ES5.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Foo = (function () {
    function Foo() {
    }
    return Foo;
})();
var Foo2 = (function () {
    function Foo2() {
    }
    return Foo2;
})();
var C = (function () {
    function C() {
    }
    Object.defineProperty(C.prototype, "get1", {
        get: function () { return new Foo; },
        enumerable: true,
        configurable: true
    });
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(D.prototype, "set1", {
        set: function (p) { },
        enumerable: true,
        configurable: true
    });
    return D;
})(C);
