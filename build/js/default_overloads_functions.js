"use strict";
function ShowMessage(Value) {
    if (typeof Value == "number") {
        console.log("ShowMessage:Value:number:", Value.toString());
    }
    if (typeof Value == "string") {
        console.log("ShowMessage:Value:string:", Value);
    }
}
ShowMessage(1337);
ShowMessage("Test");
//# sourceMappingURL=default_overloads_functions.js.map