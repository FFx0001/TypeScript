"use strict";
var _ArrayString = ["str_1", "str_2", "str_3", "str_4", "str_5"];
console.log("_ArrayString:string[]:", _ArrayString);
var _ArrayComplexValues = [1, 2, 3, "str_4", "str_5"];
console.log("_ArrayComplexValues:(string|number)[]:", _ArrayComplexValues);
var _ArrayGenericString = ["str_1", "str_2", "str_3", "str_4", "str_5"];
console.log("_ArrayGenericString:Array<string>:", _ArrayGenericString);
var _TwoDimensionalArrayOfStrings = [["str_1", "str_2", "str_3"], ["str_4", "str_5"]];
console.log("_TwoDimensionalArrayOfStrings:Array<Array<string>>:", _TwoDimensionalArrayOfStrings);
var _ArrayGenericComplexValues = ["str_1", 2, "str_3", 4, true, false, 6];
console.log("_ArrayGenericComplexValues:Array<string|number>:", _ArrayGenericComplexValues);
var _TwoDimensionalArrayGenericComplexValues = [["str_1", 2, "str_3", 4, true, false, 6], [true, false, false], [1, 2, 3, 4]];
console.log("_TwoDimensionalArrayGenericComplexValues:Array<Array<string|number|boolean>>:", _TwoDimensionalArrayGenericComplexValues);
//# sourceMappingURL=default_array_types.js.map