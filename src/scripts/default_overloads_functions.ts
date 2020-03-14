// overloads functions
function ShowMessage(Value:string);
function ShowMessage(Value:number);
function ShowMessage(Value:any):void{
    if(typeof Value=="number")
    {
        console.log("ShowMessage:Value:number:",Value.toString());
    }
    if(typeof Value=="string")
    {
        console.log("ShowMessage:Value:string:",Value);
    }
}
ShowMessage(1337);
ShowMessage("Test");