"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log("Enum_Color:", Color);
console.log("Enum_Color:Value 1:", Color[0]);
console.log("Enum_Color:Value 2:", Color[1]);
console.log("Enum_Color:Value 3:", Color[2]);
console.log("Enum_Color:Red:", Color.Red);
console.log("Enum_Color:Green:", Color.Green);
console.log("Enum_Color:Blue:", Color.Blue);
var ConcreteEnumColor;
(function (ConcreteEnumColor) {
    ConcreteEnumColor[ConcreteEnumColor["Red"] = 125] = "Red";
    ConcreteEnumColor[ConcreteEnumColor["Green"] = 255] = "Green";
    ConcreteEnumColor[ConcreteEnumColor["Blue"] = 128] = "Blue";
})(ConcreteEnumColor || (ConcreteEnumColor = {}));
console.log("ConcreteEnumColor:", ConcreteEnumColor);
var ConcreteStringEnum;
(function (ConcreteStringEnum) {
    ConcreteStringEnum["SendMessage"] = "#SMSG";
    ConcreteStringEnum["SendWisper"] = "#SWPR";
    ConcreteStringEnum["SendPackage"] = "#SPKG";
})(ConcreteStringEnum || (ConcreteStringEnum = {}));
console.log("ConcreteStringEnum:", ConcreteStringEnum);
var MixEnum;
(function (MixEnum) {
    MixEnum["URL"] = "www.ru";
    MixEnum[MixEnum["Port"] = 1337] = "Port";
})(MixEnum || (MixEnum = {}));
console.log("MixEnum:", MixEnum);
console.log("MixEnum:URL:", MixEnum.URL);
console.log("MixEnum:Port:", MixEnum.Port);
//# sourceMappingURL=default_enum_types.js.map