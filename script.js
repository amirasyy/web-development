// Block-scoped, reassignable
let name1 = "Alice";


// Block-scoped, constant
const age = 25;


// Avoid — function-scoped
var old = "legacy";

console.log(name1);
console.log(age);
console.log(old);

document.getElementById("demo").innerHTML =
    "Name: " + name1 +
    "<br>Age: " + age +
    "<br>Old: " + old;


let score = 75;
if (score >= 90) {

  console.log("A grade");
//   score = "A grade";

} else if (score >= 70) {

  console.log("B grade");
//    score = "B grade";

} else {

  console.log("Try again");
//    score = "Try Again";
}

document.getElementById("ifelse").innerHTML =
    "Grade: " + score;

// Count 0 to 4
for (let i = 0; i < 5; i++) {

  console.log(i);
  document.getElementById("countloop").innerHTML +=
    "Count: " + i + "<br>";

}

// while loop
let j = 0;

while (j < 3) {
  console.log(j);
  document.getElementById("whileloop").innerHTML +=
    "Count: " + j + "<br>";
  j++;

}

function greet(name) {
  return "Hello, " + name;
}

document.getElementById("greeting").innerHTML = greet("World");


let fruits = ["Apple", "Orange", "Banana"];

fruits.push("Mango");

document.getElementById("fruit1").innerHTML =
    "Fruits Length: " + fruits.length + "<br>" + "fruit: " + fruits + "<br>" + "fruit: " + fruits[3-2];


const person = {
    name: "Alice",
    age: 28,
    isStudent: true,

    greet: function() {
        return "Hi, I am " + this.name;
    }
};

document.getElementById("personInfo").innerHTML =
    "Name: " + person.name + "<br>" +
    "Age: " + person.age + "<br>" +
    "Student: " + person.isStudent + "<br>" +
    person.greet();
