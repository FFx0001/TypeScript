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
    action1:function(){  repeatOperation(3,(function(){console.log(this.ObjectName);}).bind(this));},
    action2:function(){  repeatOperation(5,(()=>console.log(this.ObjectName)).bind(this))},
};
settings.action1();
settings.action2();