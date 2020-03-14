"use strict";
var increment1 = function (x) { return x + 1; };
console.log("function (x:number):number { return x+1;}:", increment1(1));
var increment2 = function (x) { return x + 1; };
console.log("(x:number) => {return x+1}:", increment2(1));
var increment3 = function (x) { return x + 1; };
console.log("(x:number) =>  x+1:", increment3(1));
//# sourceMappingURL=default_arrow_functions.js.map