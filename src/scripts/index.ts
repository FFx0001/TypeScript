let Links:string[] = [
    "default_vars_types",
    "default_array_types",
    "default_cortage_types",
    "default_enum_types",
    "default_void_types",
    "default_TypeAssertions",
    "default_function_types",
    "default_function_context",
];
var DomContext:string = '';
for(let i=0;i<Links.length;i++){
    DomContext += `<p><a href="./html/${Links[i]}.html"> ${Links[i]}</a></p>`;
}
document.addEventListener('DOMContentLoaded', function(){
    // @ts-ignore
    document.getElementById('Links').innerHTML = DomContext;
});
