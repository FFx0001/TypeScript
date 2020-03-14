let _Array:number[] = [0,1,2,3,4,5,6,7,8,9];
let Summ:number=0;
// for
for(let i=0;i<_Array.length;i++){
    console.log("For:",_Array[i]);
}
// ForEach
_Array.forEach(Value => Summ +=Value);
console.log("ForEach Summ array:",Summ);

// ForEach
_Array.forEach((Value:number,index:number,array:number[])=>{
array[index]= Value +1;
});
console.log("ForEach Array number +=1: ",_Array);

// Map
// current array number ^2
// создает экземпляр массива и прогоняет каждый его элемент через функцию
let _Array2 = _Array.map(function(Value){
    return Value*Value;
    });
console.log("Map Array^2:",_Array2);

// Array filter
// filter all values %2
// фильтрует массив указанной функцией
let _Array3 = _Array.filter(value => value %2 == 0);
console.log("filter all values %2",_Array3);

//every - функция возращает true если все элемемнты массива удоволетворяют условию
let resultEvery:boolean = _Array.every(value=>value%2==0);
console.log("result Every:value=>value%2==0:",resultEvery);

//some - функция вернет true если хотябы один элмент массива удоволетворяет условию
let resultSome:boolean = _Array.some(value=>value%2==0);
console.log("result Some:value=>value%2==0:",resultSome);

// reduce - применяет функцию к аккумулятору и каждому значению с лева на право
    // (callback -- выполняется для каждого жлмента массива и принимает 4 аргумента 1- PreviousValue 2- CurrentValue 3- CurrentIndex 4- array[]), initialValue - начальное значение
let total:number = _Array.reduce( (prev:number,current:number,index:number,array:number[]) => {
    // в колбек prev значение попадает значение пердыдущей итерации
    console.log(`Reduce _Array: Prev:${prev} Current:${current} Index:${index} Array:${array}`);
    return prev + current;
},0);
console.log("Reduce _Array:Total:",total);

// spread - превращает часть массива в часть другого массива или обьекта
let NumberArray:number[] = [1,2,3];
let SpreadedArray:number[] = [22,33,44,...NumberArray];
console.log("NumberArray:",NumberArray);
console.log("SpreadedArray:",SpreadedArray);

let point2D = {x:22,y:55};
let point3D = {...point2D,z:128};
console.log("point2D",point2D);
console.log("spreaded point3D",point3D);
// for in and for of
class test {
    constructor(public Name:string, public Value:number) { }
}
let testvalues:test[]=[];
testvalues[0] = new test("Andrey", 11);
testvalues[1] = new test("Victor", 22);
testvalues[2] = new test("Vladislav", 33);
testvalues[3] = new test("Olga", 77);
testvalues[4] = new test("Yan", 42);
// for in
for(let index in testvalues){
    console.log("For In:",index);
}
// for of
for(let index of testvalues){
    console.log("For Of:",index);
}