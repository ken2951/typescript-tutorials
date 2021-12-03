//変数タイプ

let a :string = "kim";
// a = 123; --error
a = "hayashi";

//array1
let b :string[] = ["kim", "hayashi"]; 

//object1
let c :{age : number} = {age : 29};

//OR
let d :string | number = "kim";
d = 1;

//type_KEYWORD
type nameType1 = string | number;
let e :nameType1 = "kim";

//literal type
type NameType2 = "kim" | "hayashi";
let f :NameType2 = "kim";
// f = "tanaka"; --error

//function param&return
function g(h :number) :number{
  return h * 2;
}

//narrowing, assertion
//error
function i(j :number | string) {
  // return j *2;
}

//OK
function k(l :number | string) {
  if(typeof l === "number") {
    return l * 2;
  }
}

//array2
type Member = [number, boolean];
let m :Member = [100, false];

//object2
type MyObject1 = {
  name? : string,
  age : number
}

let n :MyObject1 = {
  name : "kim",
  age : 50
}

//object3 index signature
type MyObject2 = {
  [key :string] : number,
}

let o :MyObject2 = {
  age : 50,
  weight : 100
}

//class
class Person {
  name;
  constructor(name :string) {
    this.name = name;
  }
}