let Links:string[] = [
    "default_vars_types",
];
var DomContext:string = '';
for(let i=0;i<Links.length;i++){
    DomContext += `<p><a href="./html/${Links[i]}.html"> ${Links[i]}</a></p>`;
}
document.addEventListener('DOMContentLoaded', function(){
    // @ts-ignore
    document.getElementById('Links').innerHTML = DomContext;
});
