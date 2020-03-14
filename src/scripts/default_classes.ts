// classes
class UserData  {
    public Userame:string="";
    public Email:string="";
    print():void{
        console.log(`${this.Userame} ${this.Email}`);
    }
}

let UserA:UserData = new UserData();
UserA.Userame = "test";
UserA.Email = "123@mail.ru;";

let UserB:UserData = new UserData();
UserB.Userame = "admin";
UserB.Email = "qwerty@mail.ru;";

UserA.print();
UserB.print();

// class constructor
class UserData2  {
    constructor() {
        this.Userame = "default";
        this.Email = "default@mail.ru";
    }
    public Userame:string;
    public Email:string;
    print():void{
        console.log(`With constructor: ${this.Userame} ${this.Email}`);
    }
}

let User2A:UserData2 = new UserData2();
let User2B:UserData2 = new UserData2();
User2B.Userame = "admin";
User2B.Email = "qwerty@mail.ru;";

User2A.print();
User2B.print();