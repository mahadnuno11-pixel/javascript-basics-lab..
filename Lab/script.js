function show(text) {
  var outputDiv = document.getElementById("output");
  var p = document.createElement("p");
  p.textContent = text;
  outputDiv.appendChild(p);
}

var studentName = "Alice";
var studentAge = 20;
var isEnrolled = true;

show("Student Name: " + studentName);
show("Student Age: " + studentAge);
show("Enrolled: " + isEnrolled);

var myString = "Hello, JavaScript!";
var myNumber = 42;
var myBoolean = false;
var myArray = ["red", "green", "blue"];
var myObject = { city: "Toronto", country: "Canada" }; 

show("String: " + myString);
show("Number: " + myNumber);
show("Boolean: " + myBoolean);
show("Array: " + myArray.join(", "));
show("Object: " + JSON.stringify(myObject));

show("5 + 3 = " + (5 + 3));
show("5 - 3 = " + (5 - 3));
show("5 * 3 = " + (5 * 3));
show("5 / 3 = " + (5 / 3));

show("5 > 3: " + (5 > 3));
show("5 < 3: " + (5 < 3));
show("5 === 5: " + (5 === 5));
show("5 !== 3: " + (5 !== 3));

show("true && false: " + (true && false));
show("true || false: " + (true || false));
show("!true: " + (!true));
