"use strict";
var Links = [
    "default_vars_types",
];
var DomContext = '';
for (var i = 0; i < Links.length; i++) {
    DomContext += "<p><a href=\"./html/" + Links[i] + ".html\"> " + Links[i] + "</a></p>";
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Links').innerHTML = DomContext;
});
//# sourceMappingURL=index.js.map