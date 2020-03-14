"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Summ = 0;
for (var i = 0; i < _Array.length; i++) {
    console.log("For:", _Array[i]);
}
_Array.forEach(function (Value) { return Summ += Value; });
console.log("ForEach Summ array:", Summ);
_Array.forEach(function (Value, index, array) {
    array[index] = Value + 1;
});
console.log("ForEach Array number +=1: ", _Array);
var _Array2 = _Array.map(function (Value) {
    return Value * Value;
});
console.log("Map Array^2:", _Array2);
var _Array3 = _Array.filter(function (value) { return value % 2 == 0; });
console.log("filter all values %2", _Array3);
var resultEvery = _Array.every(function (value) { return value % 2 == 0; });
console.log("result Every:value=>value%2==0:", resultEvery);
var resultSome = _Array.some(function (value) { return value % 2 == 0; });
console.log("result Some:value=>value%2==0:", resultSome);
var total = _Array.reduce(function (prev, current, index, array) {
    console.log("Reduce _Array: Prev:" + prev + " Current:" + current + " Index:" + index + " Array:" + array);
    return prev + current;
}, 0);
console.log("Reduce _Array:Total:", total);
var NumberArray = [1, 2, 3];
var SpreadedArray = __spreadArrays([22, 33, 44], NumberArray);
console.log("NumberArray:", NumberArray);
console.log("SpreadedArray:", SpreadedArray);
var point2D = { x: 22, y: 55 };
var point3D = __assign(__assign({}, point2D), { z: 128 });
console.log("point2D", point2D);
console.log("spreaded point3D", point3D);
var test = (function () {
    function test(Name, Value) {
        this.Name = Name;
        this.Value = Value;
    }
    return test;
}());
var testvalues = [];
testvalues[0] = new test("Andrey", 11);
testvalues[1] = new test("Victor", 22);
testvalues[2] = new test("Vladislav", 33);
testvalues[3] = new test("Olga", 77);
testvalues[4] = new test("Yan", 42);
for (var index in testvalues) {
    console.log("For In:", index);
}
for (var _i = 0, testvalues_1 = testvalues; _i < testvalues_1.length; _i++) {
    var index = testvalues_1[_i];
    console.log("For Of:", index);
}
//# sourceMappingURL=default_iterators.js.map