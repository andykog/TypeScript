//// [inheritanceStaticFuncOverridingAccessor.ts]
class a {
    static get x() {
        return "20";
    }
    static set x(aValue: string) {

    }
}

class b extends a {
    static x() {
        return "20";
    }
}

//// [inheritanceStaticFuncOverridingAccessor.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function () {
    function a() {
    }
    Object.defineProperty(a, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return a;
})();
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        _super.apply(this, arguments);
    }
    b.x = function () {
        return "20";
    };
    return b;
})(a);
