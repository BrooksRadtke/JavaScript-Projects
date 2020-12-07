function guess()
{
    var Guess_Output;
    var Guess = document.getElementById("woodchuck").value;
    var Guess_String = " is a good guess.";
    switch(Guess)
    {
        case "1 wood":
            Guess_Output = "1 wood" + Guess_String;
            break;
        case "3.5 wood":
            Guess_Output = "3.5 wood" + Guess_String;
            break;
        case "7":
            Guess_Output = "7" + Guess_String;
            break;
        case "28 wood":
            Guess_Output = "28 wood" + Guess_String;
            break;
        case "More wood than observable throughout the expert's lifetime":
            Guess_Output = "More wood than observable throughout the expert's lifetime" + Guess_String;
            break;
        case "Ask me tomorrow":
            Guess_Output = "Ask me tomorrow" + Guess_String;
            break;
        default: 
            Guess_Output = "Not guessing is NOT an option.";
    }
    document.getElementById("output").innerHTML = Guess_Output;
}

function pullTheLever()
{
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "Ta-dah!!";
}

function drawCanvas()
{
    var c = document.getElementById("canvas_1");
    var ctx = c.getContext("2d");

    //create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");

    //fill gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
}

function linearGradient()
{
    var c = document.getElementById("canvas_2");
    var ctx = c.getContext("2d");

    //create gradient
    var grd = ctx.createLinearGradient(0, 0, 300, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 250);
}