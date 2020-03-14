// assertions type
type _ANY = any; // any

let _Text:_ANY; // create variable any type
_Text = "Hello world"; // set string value
console.log("_Text:",_Text);
// assertion type
let _Length1:number  =  (<string>_Text).length;
console.log("_Length:<string>_Text:", _Length1);
// assertion type
let _Length2:number  =  (_Text as string).length;
console.log("_Length:(_Text as string):", _Length2);