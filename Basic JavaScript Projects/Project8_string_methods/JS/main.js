function SliceMethod()
{
    var Sentence = "Tis the season to be jolly!";
    var Section = Sentence.slice(8, 15);
    document.getElementById("Slice").innerHTML = Section;
}

function Capitalize()
{
    var str = "can you believe that this entire sentence was in lowercase?";
    var res = str.toUpperCase();
    document.getElementById("Capital").innerHTML = res;
}

function LowerCase()
{
    var str = "I SHOUT AND SCREAM, AND I GET NOWHERE";
    var res = str.toLowerCase();
    document.getElementById("Lower").innerHTML = res;
}

function Search()
{
    var str = "I have a very particular set of skills. I will find you, and I will...do unpleasant things?";
    var n = str.search("particular");   //requires additional study
    document.getElementById("spoof").innerHTML = n;
}

function StringMethod()
{
    var x = 182;
    document.getElementById("NumberToString").innerHTML = x.toString();
}

function Precision()
{
    var x = 12344.432346078472;         //rounds to nearest end place
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function Fixed()
{
    var num = 3.456;
    var n = num.toFixed(2);
    document.getElementById("isFixed").innerHTML = n;
}

function Value()
{
    var str = "I have a very particular set of skills.";
    var n = str.valueOf();
    document.getElementById("Value").innerHTML = n;
}