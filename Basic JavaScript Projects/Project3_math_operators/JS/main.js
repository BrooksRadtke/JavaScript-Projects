function addition()
{
    var addition = 2+2;
    document.getElementById("Addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction()
{
    var subtraction = 10-3;
    document.getElementById("Subtraction").innerHTML = "10 - 3 = " + subtraction;
}

function multiplication()
{
    var multiplication = 3 * 2;
    document.getElementById("Multiplication").innerHTML = "3 * 2 = " + multiplication;
}

function divide()
{
    var division = 14 / 7;
    document.getElementById("Division").innerHTML = "14 / 7 = " + division;
}
//Am I smarter than a 5th grader?
function orderedOperations()
{
    var orderedOperations = (20+5) - 15 * 10 / 100;
    document.getElementById("Ordered Operations").innerHTML = orderedOperations;
}
//Ah yes, Modulus, son of Morpheus, seeker of the One
function modulus()
{
    var remainder = 25 % 6;
    document.getElementById("Modulus").innerHTML = remainder;
}
//Why you gotta be so negated all the time??
function negation()
{
    var x = 10;
    document.getElementById("Negation").innerHTML = -x + "...I know. Just tragic.";
}
//increments value by printing new page
function increment()
{
    var x = 5;
    x++;
    document.write(x);
}
//decrements value by printing new page
function decrement()
{
    var x = 5;
    x--;
    document.write(x);
}
//Generates a random number. TODO: Check why it's not return a whole number
function randomNumber()
{
    Math.random() * 100;
    document.getElementById("random").innerHTML = Math.random();
}
//rounds the value to the nearest integer
function round()
{
    document.getElementById("round").innerHTML = Math.round(4.37);
}
