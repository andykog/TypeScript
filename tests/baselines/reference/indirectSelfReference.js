//// [indirectSelfReference.ts]
class a extends b{ }
class b extends a{ }

//// [indirectSelfReference.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function (_super) {
    __extends(a, _super);
    function a() {
        _super.apply(this, arguments);
    }
    return a;
})(b);
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        _super.apply(this, arguments);
    }
    return b;
})(a);
