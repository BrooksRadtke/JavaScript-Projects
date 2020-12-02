//Example 1 --- GLOBAL VARIABLE ---
/*var x = 10;
function Addition1()
{
    document.write(20 + x + "<br>");
}
function Addition2()
{
    document.write(x + 50);
}
Addition1();
Addition2();*/

//Example 2 --- LOCAL VARIABLE ---
/*function Addition3()
{
    var x = 10;
    document.write(20 + x + "<br>");
}
function Addition4()
{
    document.write(x + 50);
}
Addition3();
Addition4();*/

//Example 3 --- CONSOLE ERROR LOG ---
/*function Addition5()
{
    var x = 10;
    console.log(20 + x + "<br>");
}
function Addition6()
{
    console.log(x + 50);
}
Addition5();
Addition6();*/

function GetDate()
{
    if(new Date().getHours()<12)
    {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }
    else
    {
        document.getElementById("Greeting").innerHTML = "Hi there! Hope you're having a great day!"
    }
}

function Vote()
{
    var Age = document.getElementById("Age").value;
    if(Age > 17)
    {
        document.getElementById("Vote").innerHTML = "Time to vote!"
    }
    else
    {
        document.getElementById("Vote").innerHTML = "Sorry, you'll have to wait until you are older."
    }   
}

function TimeOfDay()
{
    var Time = new Date().getHours();
    var Reply;

    if(Time < 12 == Time > 0)
    {
        Reply = "Good morning!";
    }
    else if (Time>12 == Time<18)
    {
        Reply = "Good afternoon.";
    }
    else 
    {
        Reply = "Good night...";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}