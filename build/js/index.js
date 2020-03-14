"use strict";
var Links = [
    "default_vars_types",
    "default_array_types",
    "default_cortage_types",
    "default_enum_types",
    "default_void_types",
    "default_TypeAssertions",
    "default_function_types",
    "default_function_context",
];
var DomContext = '';
for (var i = 0; i < Links.length; i++) {
    DomContext += "<p><a href=\"./html/" + Links[i] + ".html\"> " + Links[i] + "</a></p>";
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Links').innerHTML = DomContext;
});
//# sourceMappingURL=index.js.map