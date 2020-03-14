"use strict";
function repeatOperation(count, callback) {
    console.log("start operations");
    console.log(this);
    for (var i = 0; i < count; i++) {
        callback();
    }
    console.log("End operations");
}
;
var settings = {
    ObjectName: "Test object",
    action1: function () {
        var that = this;
        repeatOperation(3, (function () { console.log(that.ObjectName); }));
    },
    action2: function () {
        var that = this;
        repeatOperation(5, function () { return console.log(that.ObjectName); });
    },
};
settings.action1();
settings.action2();
//# sourceMappingURL=default_arrow_functions_context.js.map