//// [overload1.ts]
module O {
    export class A {
        
    }

    export class B extends A {
    }

    export class C extends B {
        
    }

    export interface I {
        f(s:string):number;
        f(n:number):string;
        g(n1:number,n2:number):number;
        g(n:number):string;
        g(a:A):C;
        g(c:C):string;
        h(s1:string,s2:number):string;
        h(s1:number,s2:string):number;
    }
}

declare var x:O.I;

var e:string=x.g(new O.A()); // matches overload but bad assignment
var y:string=x.f(3); // good
y=x.f("nope"); // can't assign number to string
var z:string=x.g(x.g(3,3)); // good
z=x.g(2,2,2); // no match
z=x.g(); // no match
z=x.g(new O.B()); // ambiguous (up and down conversion)
z=x.h(2,2); // no match
z=x.h("hello",0); // good

var v=x.g;



//// [overload1.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var O;
(function (O) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
    O.A = A;
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            _super.apply(this, arguments);
        }
        return B;
    })(A);
    O.B = B;
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            _super.apply(this, arguments);
        }
        return C;
    })(B);
    O.C = C;
})(O || (O = {}));
var e = x.g(new O.A()); // matches overload but bad assignment
var y = x.f(3); // good
y = x.f("nope"); // can't assign number to string
var z = x.g(x.g(3, 3)); // good
z = x.g(2, 2, 2); // no match
z = x.g(); // no match
z = x.g(new O.B()); // ambiguous (up and down conversion)
z = x.h(2, 2); // no match
z = x.h("hello", 0); // good
var v = x.g;
