function Call_Loop()
{
    var Digit = "";
    var x = 1;
    while (x < 10)
    {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function CharLength()           //challenge, step 180
{
    var str = "How many characters are there in this sentence?";
    var n = str.length;
    document.getElementById("CharLength").innerHTML = n;
}

function for_loop()
{
    var cars = ["BMW", "Volvo", "Ford", "Saab", "Audi"]
    var text = "";
    var i;
    for(i = 0; i < cars.length; i++)
    {
        text += cars[i] + "<br>";
    }
    document.getElementById("for_loop").innerHTML = text;
}

function array_method()
{
    var car = [];
    car [0] = "BMW";
    car [1] = "Volvo";
    car [2] = "Ford";
    car [3] = "Saab";
    document.getElementById("array").innerHTML =
    "Congratulations on the purchase of your new " + car[3] + "!";
}

function constant_function()
{
    const christmas_tree = {type: "Evergreen", brand: "Noble", cost: "$20"};
    christmas_tree.brand = "Douglas";
    christmas_tree.cost = "$175";
    document.getElementById("constant").innerHTML = "We thought a tree was going to be cheap" +
    " this year, but it turns out a " + christmas_tree.brand + " runs " + christmas_tree.cost + "??";
}

function let_function_1()
{
    var x = "red";
    document.write(x);
    {
        let x = "blue";
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}

function let_function_2()
{
    var x = "red";
    document.write(x);
    {
        var x = "blue";
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}

function returnFunction(name) 
{
    return "Hello " + name;
}
  document.getElementById("returnedID").innerHTML = returnFunction("John");

//Step 203 - Object with properties and a method
let phone = 
{
    manufacturer: "Apple",
    device: "iPhone 5",
    year: "2008",
    description: ProductDescription()
    {
        return "This mobile device is an " + this.device + " from " + this.manufacturer +
        " from " + this.year;}   
};
document.getElementById("phoneInformation").innerHTML = phone.ProductDescription();
