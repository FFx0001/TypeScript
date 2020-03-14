// typed function
function Calc(x:number,y:number,z:number):string
{
    return (x + y + z).toString();
}
console.log("calc:",Calc(1,2,3));

// declaration functions
let _Declaredfunct:(a:number,b:string)=>string;
// function typed
function AddDeclaration(number:number, str:string):string
{
    return (number+str).toString();
}
_Declaredfunct = AddDeclaration;
console.log("_Declaredfunct:",_Declaredfunct(111,"Test "));

// declare void function
let MyVoidProc:()=>void;
MyVoidProc = function(){
    console.log("The test value from void declarated function");
}
MyVoidProc();

// functions optional params
function MyAddString(strA:string,strB:string,strC?:string):string
{
    if(strC!=null)
    {
    return "3 params:"+strA+strB+strC;
    }else{
        return "2 params:"+strA+strB;
    }
}
console.log("MyAddString:",MyAddString("A","B"));
console.log("MyAddString:",MyAddString("A","B","C"));

// functions optional params
function MyOptionalFunction(A:string, B:string="default"):string
{
    return A + B;
}
console.log("MyOptionalParamitrizedFunction:two parameter:",MyOptionalFunction("iquals optional value ",undefined));
console.log("MyOptionalParamitrizedFunction:two parameter:",MyOptionalFunction("iquals optional value ","default"));
console.log("MyOptionalParamitrizedFunction:once parameter:",MyOptionalFunction("default optional value "));
console.log("MyOptionalParamitrizedFunction:once parameter:",MyOptionalFunction("other value "));
console.log("MyOptionalParamitrizedFunction:two parameter:",MyOptionalFunction("new optional value ","test"));

// function rest parameters
function TestRestParams(Message:string,...Text:string[]):void
{
    console.log("TestRestParams:Message:",Message);
    for(let i=0;i<Text.length;i++){
        console.log("TestRestParams:Text["+i+"]:",Text[i].toString());
    }
}
console.log("TestRestParams: null rest params");
TestRestParams("Test user message:");
console.log("TestRestParams: 1 rest params");
TestRestParams("Test user message:","One");
console.log("TestRestParams: 2 rest params");
TestRestParams("Test user message:","One","Two");
