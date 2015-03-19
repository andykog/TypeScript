//// [declarationEmitDestructuringParameterProperties.ts]
class C1 {
    constructor(public [x, y, z]: string[]) {
    }
}

type TupleType1 =[string, number, boolean];
class C2 {
    constructor(public [x, y, z]: TupleType1) {
    }
}

type ObjType1 = { x: number; y: string; z: boolean }
class C3 {
    constructor(public { x, y, z }: ObjType1) {
    }
}

//// [declarationEmitDestructuringParameterProperties.js]
var C1 = (function () {
    function C1(_a) {
        var x = _a[0], y = _a[1], z = _a[2];
        this.[x, y, z] = [x, y, z];
    }
    return C1;
})();
var C2 = (function () {
    function C2(_a) {
        var x = _a[0], y = _a[1], z = _a[2];
        this.[x, y, z] = [x, y, z];
    }
    return C2;
})();
var C3 = (function () {
    function C3(_a) {
        var x = _a.x, y = _a.y, z = _a.z;
        this.{ x, y, z } = { x, y, z };
    }
    return C3;
})();


//// [declarationEmitDestructuringParameterProperties.d.ts]
declare class C1 {
    x: string, y: string, z: string;
    constructor(_0: string[]);
}
declare type TupleType1 = [string, number, boolean];
declare class C2 {
    x: string, y: number, z: boolean;
    constructor(_0: TupleType1);
}
declare type ObjType1 = {
    x: number;
    y: string;
    z: boolean;
};
declare class C3 {
    x: number, y: string, z: boolean;
    constructor(_0: ObjType1);
}