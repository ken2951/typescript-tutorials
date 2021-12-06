//変数タイプ
var a = "kim";
// a = 123; --error
a = "hayashi";
//array1
var b = ["kim", "hayashi"];
//object1
var c = { age: 29 };
//OR
var d = "kim";
d = 1;
var e = "kim";
var f = "kim";
// f = "tanaka"; --error
//function param&return
function g(h) {
    return h * 2;
}
//narrowing, assertion
//error
function i(j) {
    // return j *2;
}
//OK
function k(l) {
    if (typeof l === "number") {
        return l * 2;
    }
}
var m = [100, false];
var n = {
    name: "kim",
    age: 50
};
var o = {
    age: 50,
    weight: 100
};
//class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
