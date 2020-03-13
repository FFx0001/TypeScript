"use strict";
var n = 0;
function displayTotalPerPerson(person, total) {
    var message = "Total for " + person + " is " + (total + n).toString();
    n++;
    document.getElementById("totalMessage").innerText = message;
}
//# sourceMappingURL=index.js.map