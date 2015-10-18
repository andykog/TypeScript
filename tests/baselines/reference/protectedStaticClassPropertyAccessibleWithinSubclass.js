//// [protectedStaticClassPropertyAccessibleWithinSubclass.ts]
class Base {
    protected static x: string;
    static staticMethod() {
        Base.x;         // OK, accessed within their declaring class
        Derived1.x;     // OK, accessed within their declaring class
        Derived2.x;     // OK, accessed within their declaring class
        Derived3.x;     // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    }
}

class Derived1 extends Base {
    static staticMethod1() {
        Base.x;         // OK, accessed within a class derived from their declaring class
        Derived1.x;     // OK, accessed within a class derived from their declaring class
        Derived2.x;     // OK, accessed within a class derived from their declaring class
        Derived3.x;     // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    }
}

class Derived2 extends Base {
    static staticMethod2() {
        Base.x;         // OK, accessed within a class derived from their declaring class
        Derived1.x;     // OK, accessed within a class derived from their declaring class
        Derived2.x;     // OK, accessed within a class derived from their declaring class
        Derived3.x;     // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    }
}

class Derived3 extends Derived1 {
    protected static x: string;
    static staticMethod3() {
        Base.x;         // OK, accessed within a class derived from their declaring class
        Derived1.x;     // OK, accessed within a class derived from their declaring class
        Derived2.x;     // OK, accessed within a class derived from their declaring class
        Derived3.x;     // OK, accessed within their declaring class
    }
}


Base.x;         // Error, neither within their declaring class nor classes derived from their declaring class
Derived1.x;     // Error, neither within their declaring class nor classes derived from their declaring class
Derived2.x;     // Error, neither within their declaring class nor classes derived from their declaring class
Derived3.x;     // Error, neither within their declaring class nor classes derived from their declaring class

//// [protectedStaticClassPropertyAccessibleWithinSubclass.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
    }
    Base.staticMethod = function () {
        Base.x; // OK, accessed within their declaring class
        Derived1.x; // OK, accessed within their declaring class
        Derived2.x; // OK, accessed within their declaring class
        Derived3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    };
    return Base;
})();
var Derived1 = (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        _super.apply(this, arguments);
    }
    Derived1.staticMethod1 = function () {
        Base.x; // OK, accessed within a class derived from their declaring class
        Derived1.x; // OK, accessed within a class derived from their declaring class
        Derived2.x; // OK, accessed within a class derived from their declaring class
        Derived3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    };
    return Derived1;
})(Base);
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
    }
    Derived2.staticMethod2 = function () {
        Base.x; // OK, accessed within a class derived from their declaring class
        Derived1.x; // OK, accessed within a class derived from their declaring class
        Derived2.x; // OK, accessed within a class derived from their declaring class
        Derived3.x; // Error, redefined in a subclass, can only be accessed in the declaring class or one of its subclasses
    };
    return Derived2;
})(Base);
var Derived3 = (function (_super) {
    __extends(Derived3, _super);
    function Derived3() {
        _super.apply(this, arguments);
    }
    Derived3.staticMethod3 = function () {
        Base.x; // OK, accessed within a class derived from their declaring class
        Derived1.x; // OK, accessed within a class derived from their declaring class
        Derived2.x; // OK, accessed within a class derived from their declaring class
        Derived3.x; // OK, accessed within their declaring class
    };
    return Derived3;
})(Derived1);
Base.x; // Error, neither within their declaring class nor classes derived from their declaring class
Derived1.x; // Error, neither within their declaring class nor classes derived from their declaring class
Derived2.x; // Error, neither within their declaring class nor classes derived from their declaring class
Derived3.x; // Error, neither within their declaring class nor classes derived from their declaring class
