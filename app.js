// Lab 1
let human;
let name = "Teerapat";
human = name;
console.log(human);

// Lab 2
let myMoney = 100000000;
const myFatherNameAndMyMotherName = "OMG";
let myAddress = `118/61 Vino Condo Ratchada32`;
const ageOfUniverse = 13.8e9;
console.log(`I have $${myMoney}`);

// Lab 3
const myName = "Teerapat";
let myAge = 33;
let myBio = `My name is ${myName}. \nI am ${myAge} years old. \nMy address is ${myAddress}`;
console.log(myBio);

// Lab 4
"" + 1 + 0; // "10"
"" - 1 - 0; // "-1"
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // Infinity
" -9 " + 5; // " -95 "
" -9" - 5; // "-14"
null + 1; // 1
undefined + 1; // NaN
"\t\n" - 2; // 2

// Lab 5
let name = prompt("Enter name");

if (name === "Teerapat") {
  alert("เก่งมาก");
} else {
  alert("คุณไม่รู้จักชื่อฉัน");
}

// Lab 6
let points = prompt("Please enter your points");

if (points >= 80) {
  alert("Your grade is A");
} else if (points >= 70 && points <= 79) {
  alert("Your grade is B");
} else if (points >= 60 && points <= 69) {
  alert("Your grade is C");
} else if (points >= 50 && points <= 69) {
  alert("Your grade is D");
} else {
  alert("Your grade is F");
}

// Lab 7
let yourAge = prompt("How old are you?");

let price;
price = yourAge < 18 ? 2000 : 3500;
