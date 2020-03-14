// Enums
enum Color {
    Red,
    Green,
    Blue
}
console .log("Enum_Color:",Color);
// get name enums for indexes
console .log("Enum_Color:Value 1:",Color[0]);
console .log("Enum_Color:Value 2:",Color[1]);
console .log("Enum_Color:Value 3:",Color[2]);
// get values for name enum
console .log("Enum_Color:Red:",Color.Red);
console .log("Enum_Color:Green:",Color.Green);
console .log("Enum_Color:Blue:",Color.Blue);

// concrete values for enum
enum ConcreteEnumColor {
    Red= 125,
    Green =255,
    Blue=128
}
console .log("ConcreteEnumColor:",ConcreteEnumColor);

// concrete string values for enum
enum ConcreteStringEnum {
    SendMessage= "#SMSG",
    SendWisper= "#SWPR",
    SendPackage= "#SPKG",
}
console.log("ConcreteStringEnum:",ConcreteStringEnum);

// mix values for enum
enum MixEnum {
    URL= "www.ru",
    Port= 1337
}
console.log("MixEnum:",MixEnum);
console.log("MixEnum:URL:",MixEnum.URL);
console.log("MixEnum:Port:",MixEnum.Port);