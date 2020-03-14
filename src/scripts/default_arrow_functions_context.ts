function repeatOperation(count:number,callback:()=>void):void{
    console.log("start operations");
    console.log(this);
    for(let i = 0;i<count;i++){
        callback();
    }
    console.log("End operations");
};

let settings = {
    ObjectName:"Test object",
    action1:function(){
        let that = this;
        repeatOperation(3,(function(){console.log(that.ObjectName);}));},
    action2:function(){
        let that = this;
        repeatOperation(5,()=>console.log(that.ObjectName))},
};
settings.action1();
settings.action2();