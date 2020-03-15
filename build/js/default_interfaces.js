"use strict";
var User_A = {
    name: "Test",
    loginfo: function (info) {
        console.log("User_A:info:", info);
    }
};
var User_B = {
    name: "Test",
    age: 99,
    loginfo: function (info) {
        console.log("User_B:info:", info);
    }
};
console.log("User_A", User_A);
console.log("User_B", User_B);
var User = (function () {
    function User() {
        this.name = "user";
        this.job = "";
        this.newAge = 0;
    }
    User.prototype.loginfo = function (info) {
        console.log("Class_User:info:", info, this);
    };
    return User;
}());
var NewUser = new User();
NewUser.loginfo("NewUser");
console.log("User:", NewUser);
var User2 = (function () {
    function User2() {
        this.name = "User2";
        this.job = "";
        this.newAge = 0;
    }
    User2.prototype.loginfo = function (info) {
        console.log("Class_User2:info:", info, this);
    };
    User2.prototype.getYear = function () {
        return 2020;
    };
    return User2;
}());
var NewUser2 = new User2();
console.log("User2:getYear():", NewUser2.getYear());
NewUser2.loginfo("NewUser2");
console.log("User2:", NewUser2);
//# sourceMappingURL=default_interfaces.js.map