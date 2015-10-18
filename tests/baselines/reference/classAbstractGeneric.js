//// [classAbstractGeneric.ts]
abstract class A<T> {
    t: T;
    
    abstract foo(): T;
    abstract bar(t: T);
}

abstract class B<T> extends A<T> {}

class C<T> extends A<T> {} // error -- inherits abstract methods

class D extends A<number> {} // error -- inherits abstract methods

class E<T> extends A<T> { // error -- doesn't implement bar
    foo() { return this.t; }
}

class F<T> extends A<T> { // error -- doesn't implement foo
    bar(t : T) {}
}

class G<T> extends A<T> {
    foo() { return this.t; }
    bar(t: T) { }
}

//// [classAbstractGeneric.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
})(A);
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(A); // error -- inherits abstract methods
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(A); // error -- inherits abstract methods
var E = (function (_super) {
    __extends(E, _super);
    function E() {
        _super.apply(this, arguments);
    }
    E.prototype.foo = function () { return this.t; };
    return E;
})(A);
var F = (function (_super) {
    __extends(F, _super);
    function F() {
        _super.apply(this, arguments);
    }
    F.prototype.bar = function (t) { };
    return F;
})(A);
var G = (function (_super) {
    __extends(G, _super);
    function G() {
        _super.apply(this, arguments);
    }
    G.prototype.foo = function () { return this.t; };
    G.prototype.bar = function (t) { };
    return G;
})(A);
