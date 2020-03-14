"use strict";
var addlog;
function WriteToLog() {
    console.log(this);
}
WriteToLog();
var someObj = {
    Name: 'test',
    TestMethod: WriteToLog
};
someObj.TestMethod();
function test(str, a, b) {
    console.log(str, "test:", a + b);
    console.log(str, "test:", this);
}
test("default call:", 10, 10);
var SomeTestObject = {
    Name: "test object"
};
test.call(SomeTestObject, "test.call:", 10, 10);
test.apply(SomeTestObject, ["test.apply:", 10, 10]);
var funct = test.bind(SomeTestObject, "test.bind:", 10);
funct(10);
//# sourceMappingURL=default_function_context.js.map