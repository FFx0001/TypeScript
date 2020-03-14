// default function
let increment1 = function (x:number):number { return x+1;}
console.log("function (x:number):number { return x+1;}:",increment1(1));

// arrow function 1
let increment2 = (x:number) => {return x+1};
console.log("(x:number) => {return x+1}:",increment2(1));

// arrow function 2
let increment3 = (x:number) =>  x+1;
console.log("(x:number) =>  x+1:",increment3(1));
