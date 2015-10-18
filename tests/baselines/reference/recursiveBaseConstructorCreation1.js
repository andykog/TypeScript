//// [recursiveBaseConstructorCreation1.ts]
class C1 {
public func(param: C2): any { }
}
class C2 extends C1 { }
var x = new C2(); // Valid


//// [recursiveBaseConstructorCreation1.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C1 = (function () {
    function C1() {
    }
    C1.prototype.func = function (param) { };
    return C1;
})();
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        _super.apply(this, arguments);
    }
    return C2;
})(C1);
var x = new C2(); // Valid
