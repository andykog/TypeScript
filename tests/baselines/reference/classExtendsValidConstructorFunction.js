//// [classExtendsValidConstructorFunction.ts]
function foo() { }

var x = new foo(); // can be used as a constructor function

class C extends foo { } // error, cannot extend it though

//// [classExtendsValidConstructorFunction.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function foo() { }
var x = new foo(); // can be used as a constructor function
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(foo); // error, cannot extend it though
