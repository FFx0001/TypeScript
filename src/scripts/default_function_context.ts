
// context function this
let addlog:()=>void;
function WriteToLog()
{
    console.log(this);
}
WriteToLog();

// function with object
let someObj ={
    Name:'test',
    TestMethod:WriteToLog
}
someObj.TestMethod();

// install context functions
function test(str:string,a:number,b:number):void
{
    console.log(str,"test:",a+b);
    console.log(str,"test:",this);
}

test("default call:",10,10);

let SomeTestObject = {
    Name:"test object"
}
test.call(SomeTestObject,"test.call:",10,10);
test.apply(SomeTestObject,["test.apply:",10,10]);
let funct = test.bind(SomeTestObject,"test.bind:",10);
funct(10);
