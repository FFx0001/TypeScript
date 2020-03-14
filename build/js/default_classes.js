"use strict";
var UserData = (function () {
    function UserData() {
        this.Userame = "";
        this.Email = "";
    }
    UserData.prototype.print = function () {
        console.log(this.Userame + " " + this.Email);
    };
    return UserData;
}());
var UserA = new UserData();
UserA.Userame = "test";
UserA.Email = "123@mail.ru;";
var UserB = new UserData();
UserB.Userame = "admin";
UserB.Email = "qwerty@mail.ru;";
UserA.print();
UserB.print();
var UserData2 = (function () {
    function UserData2() {
        this.Userame = "default";
        this.Email = "default@mail.ru";
    }
    UserData2.prototype.print = function () {
        console.log("With constructor: " + this.Userame + " " + this.Email);
    };
    return UserData2;
}());
var User2A = new UserData2();
var User2B = new UserData2();
User2B.Userame = "admin";
User2B.Email = "qwerty@mail.ru;";
User2A.print();
User2B.print();
//# sourceMappingURL=default_classes.js.map