//----------------- Chapter:01-----------------//
/*Q1: 1. Write a script to greet your website visitor using JS alert box*/

/*alert("Welcome To Website User");

/*Q2: Write a script to display following message on your webpage:

alert("Error! Please enter a valid password."); */

/* Q3: Write a script to display following message on your webpage: (Hint : Use line break)*/

/*var message = "Welcome To Js Land...\nHappy Coding";
alert(message);*/

/* Q4: Write a script to display following messages in sequence*/

/*alert("Welcome To JS Land");
alert("Happy Coding!");*/

/* Q5: Generate the following message through browser’s developer console:*/

//alert("Hello.... I can run JS through my web browser`s console");//



//----------------- Chapter:02-----------------//

/*Q1: Declare a variable called username.*/

//var username//

/*Q2: Declare a variable called myName & assign to it a string that represents your Full Name  */

//var myname = Zain//

/*Q3: Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.*/

/*
var message
message = "Hello world"

alert(message);*/

/*Q4: Write a script to save student’s bio data in JS variables and show the data in alert boxes. */

      /*  var studentName = prompt("Enter student's full name:");
        var studentAge = prompt("Enter student's age:");
        var studentGrade = prompt("Enter student's grade (e.g., A, B, C):");
        var studentEmail = prompt("Enter student's email address:");


        alert("Student Name: " + studentName);
        alert("Student Age: " + studentAge);
        alert("Student Grade: " + studentGrade);
        alert("Student Email: " + studentEmail);

        console.log("Student Name: " + studentName);
        console.log("Student Age: " + studentAge);
        console.log("Student Grade: " + studentGrade);
        console.log("Student Email: " + studentEmail); */

/*Q5: Write a script to display the following alert using one JS variable:*/

/*var message = "PIZZA\n PIZZ\n PIZ\n PI\n P";

alert(message);*/

/*Q6:Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use
string concatenation)*/
/*
        var email = "sheikhzainulabideen30@gmail.com";


        alert("My email address is " + email); */

/*Q7:Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:*/

/*var message = "Iam Trying to Learn JavaScript From A Smarter\nWay To Learn Javascript"

alert(message);*/

/*Q8:8. Write a script to display this in browser through JS*/

/*document.write("Yeah! I Can Write HTML Content Through Javascript");*/

/*Q9:Store following string in a variable and show in alert and browser through JS*/

/*var message = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(message)*/


//----------------- Chapter:03-----------------//

/*Q1:Declare a variable called age & assign to it your age. Show your age in an alert box.

/*var age = "I am 17 Year old"

alert(age)*/

/*Q2:Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

        var visitCount = localStorage.getItem('visitCount');

      
        if (visitCount === null) {
            visitCount = 1;
        } else {
            visitCount = parseInt(visitCount) + 1;
        }

      
        localStorage.setItem('visitCount', visitCount);

        
        alert(`You have visited this site ${visitCount} times`);*/

/*Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:*/

/*var birthyear = 2009;
document.write("<pre>")
document.write("This Is My Birth Year " + birthyear);
document.write("</pre>")
document.write("Data Type Of My Decalared Variable Is Number")*/

/*Q:4: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
orderShow the following message in your browser: “JohnDoe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

/*var vistor_name = "ali"
var product_title = "t-shirt"
var product_quantity = 5

document.write(vistor_name + " ordered " + product_quantity + " " + product_title + " On Zara_Collections" )*/

//----------------- Chapter:04-----------------//

/*Q1:Declare 3 variables in one statement.
var name = Zain , age = 17 , job = web_developer*/;

/*Q2: Declare 5 legal & 5 illegal variable names.*/

/*Legal Variable Names

var $price = 100;
var _userName = "John";
var totalAmount2 = 500;
var user_age = 25;
var productTitle = "T-shirt";*/

/*Illegal Variable Names

let 2quantity = 5;      
let first-name = "John";
let user name = "John"; 
let var = 10;           
let product#id = 101;*/

/*Q3:3 Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/

/*var heading = "<h1> Rules for naming JS variables </h1>\n"
var answer1 = "<p>Variable names can only contain letters, digits, underscores (_), and dollar signs ($).</p>\n"
var answer2 = "<p>Variables must begin with a letter, dollar sign ($) or underscore (_).</p>\n"
var answer3 = "<p>Variables must begin with a letter, dollar sign</p>\n"
var answer4 = "<p>Variable names are case sensitive</p></li>\n"
var answer5 = "<p>Variable names should not be JS keywords (or reserved words)</p>\n"
document.write(heading , answer1 , answer2 , answer3 , answer4 , answer5);*/

//----------------- Chapter:05-----------------//

/*Q1:Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/

/*var num = 3
var num2 = 5

var sum = num + num2

document.write("Sum of " + num + " and " + num2 + " is " + sum);*/

/*Q2: Repeat task1 for subtraction, multiplication, division & modulus.*/

/*var num1 = 3;
var num2 = 5;

var difference = num1 - num2; // Subtraction
var product    = num1 * num2; // Multiplication
var quotient   = num1 / num2; // Division
var remainder  = num1 % num2; // Modulus

document.write("Subtraction of " + num1 + " and " + num2 + " is " + difference + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
document.write("Division of " + num1 + " by " + num2 + " is " + quotient + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + remainder + "<br>");*/

/*Q3:Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.*/

/*var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7; 
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is : " + remainder);*/

/*Q4:Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:*/

/*var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");*/

/*Q5:-Write a script to display multiplication table of any number in your browser. E.g*/

/*var num = 4; 

document.write("<h2>Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}*/

/*Q6: The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/

/*
var celsius = 25;
/var fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
var fahrenheit = 70;
var celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C");*/

/*Q7: Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
MATH EXPRESSIONS | JAVASCRIPT
Page 5 of 9
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

/*var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR");*/

/*Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser*/

/*var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");*/

/*Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/

/*var totalPKR = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);*/

/*Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/
/*var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("Result of arithmetic sequence is: " + result);*/
/*Q11: The Age Calculator: Forgot how old someone is? Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”.*/

/*var currentYear = 2026;
var birthYear = 1998;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");*/


/*Q12: The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/

/*var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);*/

/*Q13: The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”.*/

/*var favoriteSnack = "chocolate chip cookies";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);*/


//----------------- Chapter:06-09-----------------//
/*Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:*/
/*var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("...................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");*/

/*Answer: Explanation:
a = 1

b = 1

result = 3

Step-by-Step Explanation:Initial values: 

var a = 2, b = 1;

--a;

Pre-decrements a from 2 to 1.

Current value: 1

--a - --b;

--a is 1

--b pre-decrements b from 1 to 0

Expression: 1 - 0 = 1

--a - --b + ++b;

++b pre-increments b back from 0 to 1

Expression: 1 - 0 + 1 = 2

--a - --b + ++b + b--;

b-- evaluates to b's current value (1), then decrements b to 0 afterwards

Expression: 1 - 0 + 1 + 1 = 3*/

/*Q3:Write a program that takes input a name from user & greet the user.

/*var userName = prompt("Enter your name:");

if (userName) {
    document.write("Hello, " + userName + "! Welcome to our website.");
}*/

/*Q4:Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.*/


/*var input = prompt("Enter a number to show its multiplication table:", "5");
var num = Number(input) || 5;

document.write("<h2>Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}*/

/*Q5: Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
ALERTS | JAVASCRIPT
Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/

/*var sub1 = prompt("Enter first subject name:", "English");
var sub2 = prompt("Enter second subject name:", "Math");
var sub3 = prompt("Enter third subject name:", "Urdu");

var totalMarksPerSub = 100;

var marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

var grandTotal = totalMarksPerSub * 3;
var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / grandTotal) * 100;


document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");*/
//----------------- Chapter:09-11-----------------//

/*Q1:Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”*/


/*var cityName = prompt("Enter your city name:");

if (cityName && cityName.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}*/

/*Q2:Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.*/

/*var gender = prompt("Enter your gender (male/female):");

if (gender && gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender && gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}*/

/*Q3:Write a program to take input color of road traffic signal from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now*/


/*var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");

if (signalColor) {
    signalColor = signalColor.toLowerCase();
    
    if (signalColor === "red") {
        alert("Must Stop");
    } else if (signalColor === "yellow") {
        alert("Ready to move");
    } else if (signalColor === "green") {
        alert("Move now");
    } else {
        alert("Invalid color entered.");
    }
}*/


/*Q4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”*/

/*var fuel = Number(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}*/

/*Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table*/

/*var sub1Marks = Number(prompt("Enter marks obtained in Subject 1:"));
var sub2Marks = Number(prompt("Enter marks obtained in Subject 2:"));
var sub3Marks = Number(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = Number(prompt("Enter total marks for all subjects:"));

// Calculations
var totalObtained = sub1Marks + sub2Marks + sub3Marks;
var percentage = (totalObtained / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + totalObtained + "<br>");
document.write("Percentage : " + percentage.toFixed(2) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");*/

/*Q7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a. If user guesses the same number, show “Bingo! Correct answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

/*var secretNum = 7;
var userGuess = Number(prompt("Guess the secret number (1 to 10):"));

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum || userGuess - 1 === secretNum) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess! Try again.");
}*/

/*Q8: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.*/

/*var num = Number(prompt("Enter a number to check divisibility by 3:"));

if (num % 3 === 0) {
    alert("The number " + num + " is divisible by 3.");
} else {
    alert("The number " + num + " is not divisible by 3.");
}
/*
Q9: Write a program that checks whether the given input is an even number or an odd number.


var num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert(num + " is an Even number.");
} else {
    alert(num + " is an Odd number.");
}
*/


/*Q10: Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/


/*var temp = Number(prompt("Enter current temperature:"));

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's freezing outside!");
}*/

/*Q11: Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user*/

/*var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
} else if (operation === "-") {
    result = num1 - num2;
    alert(num1 + " - " + num2 + " = " + result);
} else if (operation === "*") {
    result = num1 * num2;
    alert(num1 + " * " + num2 + " = " + result);
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert(num1 + " / " + num2 + " = " + result);
    } else {
        alert("Error: Division by zero is not allowed.");
    }
} else if (operation === "%") {
    result = num1 % num2;
    alert(num1 + " % " + num2 + " = " + result);
} else {
    alert("Invalid operation selected.");
}*/