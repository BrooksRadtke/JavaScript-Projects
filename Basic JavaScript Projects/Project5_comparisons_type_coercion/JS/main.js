function type()
{
    document.getElementById("typeof").innerHTML = typeof "Brooks";
}

function checkNaN()
{
    document.getElementById("Number Status").innerHTML = 0/0;
}

function notANumber()
{
    document.getElementById("NumberCheck").innerHTML = isNaN('This is a string!');
}

function yearStatus()
{
    document.getElementById("Year").innerHTML = isNaN("2020");
}

function isTest1()          //using exponents to find infinity
{
    document.getElementById("Infinity").innerHTML = document.write(3E310);
}

function isTest2()
{
    document.getElementById("NegInfinity").innerHTML = document.write(-3E310);
}

function isTest3()          //t || f
{
    document.getElementById("True").innerHTML = document.write(10 > 2);
}

function isTest4()
{
    document.getElementById("False").innerHTML = document.write(10 < 2);
}

function isTest5()          //Displays returned result in console
{
    document.getElementById("Console").innerHTML = console.log(2+2);
}

function isTest6()          //Tests out coercion
{
    document.getElementById("typeCo").innerHTML = document.write('10' + 2);
}

function challenge1()       //Displays returned result in console
{
    document.getElementById("Console").innerHTML = console.log(10 < 2);
}

function isTest7()          //Checking if values are eaqual
{
    document.getElementById("IsEqual").innerHTML = document.write(10 == 10);
}

function isTest8()          
{
    document.getElementById("NotEqual").innerHTML = document.write(10 == 1);
}

function isTest9()          //Checking is value and type are equal
{
    document.getElementById("Eqaual&&Type_1").innerHTML = document.write(10 === 10);
}

function isTest10()          //Checking is value and type are equal
{
    document.getElementById("Eqaual&&Type_2").innerHTML = document.write(10 === 1);
}

function isTest11()          //Checking is value and type are equal
{
    document.getElementById("Eqaual&&Type_3").innerHTML = document.write(10 === "10");
}

function isTest12()          //Checking is value and type are equal
{
    document.getElementById("Eqaual&&Type_4").innerHTML = document.write("ten" === "ten");
}

function isTest13()          //Using && to check t/f
{
    document.getElementById("Test13").innerHTML = document.write(2>1 && 5<6);
}

function isTest14()          //Using && to check t/f
{
    document.getElementById("Test14").innerHTML = document.write(2>1 && 5>6);
}

function isTest15()          //Using && to check t/f
{
    document.getElementById("Test15").innerHTML = document.write(2>1 || 5<6);
}

function isTest16()          //Using && to check t/f
{
    document.getElementById("Test16").innerHTML = document.write(2<1 || 5>6);
}

function isTest17()         //using !
{
    document.getElementById("Test17").innerHTML = document.write(!(10>2));
}

function isTest18()         //using !
{
    document.getElementById("Test18").innerHTML = document.write(!(10<2));
}