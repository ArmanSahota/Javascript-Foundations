// exercise 1

var firstName = "Arman";
var lastName = "Sahota";

console.log("Hello, " + firstName + " " + lastName + "!");



// exercise 2
var globalVar = 10;
console.log("globalVar:", globalVar);
if(true){
    var localvar = 20
}
console.log("localvar:", localvar);
// since the if statment was ture the localvar printed 20 if false localvar is undefined
var number = 6;

// exercise 3
if (number % 2 == 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }

//exercise 4
var fruit1 = "Apples";
var fruit2 = "Banana";
var fruitsMessage = (fruit1 + " and " +fruit2);
console.log(fruitsMessage);

//exercise 5
var userName = "namrA";
var isLoggedIn = false;

var greetingMessage = isLoggedIn ? "welcome back, " + userName + "!" : "Hello, " + userName + "! Please log in!";

console.log(greetingMessage);

//exercise 6
if (true) {
    var localVar2 = 5;
    console.log("localVar inside the block:", localVar2);
  }
  var globalVar = 10;
  
  console.log("localVar outside the block:", localVar2); 
  console.log("globalVar:", globalVar);
// local variable seems to work the same inside and outside the block
 
// exercise 7
var firstName = "Arman";
var lastName = "Sahota";
var fullName = firstName + " " + lastName;

console.log("Length of the full name:", fullName.length);
console.log("Full Name:", fullName);

// exercise 8
var product = "phone";
var discount = 20;

if(discount <= 1)
{
    console.log("No discount available for: " + product);
}
else {console.log(discount+"% discount on " + product)};

//exercise 9
var name = "Johnny";
var place = "Seattle";
var activity = "games";

var story = "Once upon a time, " + name + " visited " + place + " and enjoyed playing " + activity +"."

console.log(story);

// exercise 10
// I think the difference between html, css, and javascript is that html is the building blocks or like the design of the website, 
// css is like the main concept, like the walls, ceiling, floor all painted, like a house,
// and java script is like the furnitare, its the things that make the website look good with animations, textures, ect. 
