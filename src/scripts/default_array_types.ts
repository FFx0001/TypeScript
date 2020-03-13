// default array
let _ArrayString:string[] = ["str_1","str_2","str_3","str_4","str_5"];
console.log("_ArrayString:string[]:",_ArrayString);
// default array
let _ArrayComplexValues:(string|number)[] = [1,2,3,"str_4","str_5"];
console.log("_ArrayComplexValues:(string|number)[]:",_ArrayComplexValues);
// generic array
let _ArrayGenericString:Array<string> = ["str_1","str_2","str_3","str_4","str_5"];
console.log("_ArrayGenericString:Array<string>:",_ArrayGenericString);
// generic two-dimensional array of strings
let _TwoDimensionalArrayOfStrings:Array<Array<string>> = [["str_1","str_2","str_3"],["str_4","str_5"]];
console.log("_TwoDimensionalArrayOfStrings:Array<Array<string>>:",_TwoDimensionalArrayOfStrings);
// generic complex array
let _ArrayGenericComplexValues:Array<string|number|boolean> = ["str_1",2,"str_3",4,true,false,6];
console.log("_ArrayGenericComplexValues:Array<string|number>:",_ArrayGenericComplexValues);
// generic complex array
let _TwoDimensionalArrayGenericComplexValues:Array<Array<string|number|boolean>> = [["str_1",2,"str_3",4,true,false,6],[true,false,false],[1,2,3,4]];
console.log("_TwoDimensionalArrayGenericComplexValues:Array<Array<string|number|boolean>>:",_TwoDimensionalArrayGenericComplexValues);