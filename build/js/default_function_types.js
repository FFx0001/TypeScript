"use strict";
function Calc(x, y, z) {
    return (x + y + z).toString();
}
console.log("calc:", Calc(1, 2, 3));
var _Declaredfunct;
function AddDeclaration(number, str) {
    return (number + str).toString();
}
_Declaredfunct = AddDeclaration;
console.log("_Declaredfunct:", _Declaredfunct(111, "Test "));
var MyVoidProc;
MyVoidProc = function () {
    console.log("The test value from void declarated function");
};
MyVoidProc();
function MyAddString(strA, strB, strC) {
    if (strC != null) {
        return "3 params:" + strA + strB + strC;
    }
    else {
        return "2 params:" + strA + strB;
    }
}
console.log("MyAddString:", MyAddString("A", "B"));
console.log("MyAddString:", MyAddString("A", "B", "C"));
function MyOptionalFunction(A, B) {
    if (B === void 0) { B = "default"; }
    return A + B;
}
console.log("MyOptionalParamitrizedFunction:two parameter:", MyOptionalFunction("iquals optional value ", undefined));
console.log("MyOptionalParamitrizedFunction:two parameter:", MyOptionalFunction("iquals optional value ", "default"));
console.log("MyOptionalParamitrizedFunction:once parameter:", MyOptionalFunction("default optional value "));
console.log("MyOptionalParamitrizedFunction:once parameter:", MyOptionalFunction("other value "));
console.log("MyOptionalParamitrizedFunction:two parameter:", MyOptionalFunction("new optional value ", "test"));
function TestRestParams(Message) {
    var Text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Text[_i - 1] = arguments[_i];
    }
    console.log("TestRestParams:Message:", Message);
    for (var i = 0; i < Text.length; i++) {
        console.log("TestRestParams:Text[" + i + "]:", Text[i].toString());
    }
}
console.log("TestRestParams: null rest params");
TestRestParams("Test user message:");
console.log("TestRestParams: 1 rest params");
TestRestParams("Test user message:", "One");
console.log("TestRestParams: 2 rest params");
TestRestParams("Test user message:", "One", "Two");
//# sourceMappingURL=default_function_types.js.map