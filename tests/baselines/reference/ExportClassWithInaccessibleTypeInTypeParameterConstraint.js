//// [ExportClassWithInaccessibleTypeInTypeParameterConstraint.ts]
module A {

    class Point {
        x: number;
        y: number;
    }

    export var Origin: Point = { x: 0, y: 0 };

    export class Point3d extends Point {
        z: number;
    }

    export var Origin3d: Point3d = { x: 0, y: 0, z: 0 };

    export class Line<TPoint extends Point>{
        constructor(public start: TPoint, public end: TPoint) { }

        static fromorigin2d(p: Point): Line<Point>{
            return null;
        }
    }
}


//// [ExportClassWithInaccessibleTypeInTypeParameterConstraint.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A;
(function (A) {
    var Point = (function () {
        function Point() {
        }
        return Point;
    })();
    A.Origin = { x: 0, y: 0 };
    var Point3d = (function (_super) {
        __extends(Point3d, _super);
        function Point3d() {
            _super.apply(this, arguments);
        }
        return Point3d;
    })(Point);
    A.Point3d = Point3d;
    A.Origin3d = { x: 0, y: 0, z: 0 };
    var Line = (function () {
        function Line(start, end) {
            this.start = start;
            this.end = end;
        }
        Line.fromorigin2d = function (p) {
            return null;
        };
        return Line;
    })();
    A.Line = Line;
})(A || (A = {}));
