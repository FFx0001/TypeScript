// interfaces
interface IUser {
    name:string;
    age?:number;
    loginfo(info:string):void;
}
// creating objects
const User_A:IUser={
    name:"Test",
    loginfo(info: string): void {
        console.log("User_A:info:",info);
    }
}
const User_B:IUser={
    name:"Test",
    age:99,
    loginfo(info: string): void {
        console.log("User_B:info:",info);
    }
}

console.log("User_A",User_A);
console.log("User_B",User_B);

// creating class
class User implements  IUser{
    name:string = "user";
    job:string="";
    newAge:number=0;
    loginfo(info: string): void {
        console.log("Class_User:info:",info,this);
    }
}
let NewUser:User = new User();
NewUser.loginfo("NewUser");
console.log("User:",NewUser);

// multi interfaces
interface IGetYear {
    getYear():number;
}
class User2 implements  IUser,IGetYear{
    name:string = "User2";
    job:string="";
    newAge:number=0;
    loginfo(info: string): void {
        console.log("Class_User2:info:",info,this);
    }
    getYear(): number {
        return 2020;
    }
}
let NewUser2:User2 = new User2();
console.log("User2:getYear():",NewUser2.getYear());
NewUser2.loginfo("NewUser2");
console.log("User2:",NewUser2);

//