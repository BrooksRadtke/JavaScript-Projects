function Ride()
{
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "Sorry, you are too small" : "Great, you are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride."
}

function Vote()
{
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age < 18) ? "Sorry, please wait a few years" : "It's time"
    document.getElementById("Vote").innerHTML = canVote + " to vote."
}
//Same Section
function CarInfo(Make, Model, Year, Color)
{
    this.CarInfo_Make = Make;
    this.CarInfo_Model = Model;
    this.CarInfo_Year = Year;
    this.CarInfo_Color = Color;
}
var Brooks = new CarInfo("Hyundai", "Elantra", 2015, "Silver");
function WhatDoIDrive()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Brooks drives a " + Brooks.CarInfo_Color + " " + Brooks.CarInfo_Make 
    + " " + Brooks.CarInfo_Model + " from " + Brooks.CarInfo_Year;
}
//End Same Section^^

//If trying to assign a variable to a standard keyword, code does not run
function Location(Planet, Continent, Country, State)
{
    this.Location_Planet = Planet;
    this.Location_Continent = Continent;
    this.Location_Country = Country;
    this.Location_State = State;
}
var Joan = new Location("Earth", "North America", "US", "Oregon")
function WhereAmI()
{
    document.getElementById("New_and_This").innerHTML = 
    "Why, you're on planet " + Joan.Location_Planet + " in the continent of "
    + Joan.Location_Continent + " in " + Joan.Location_State + " , " + Joan.Location_Country;
}

function Countdown()
{
    document.getElementById("Countdown").innerHTML = Count();
    function Count()
    {
        var StartingNum = 10;
        function MinusOne() 
        {
            StartingNum -= 1;
        }
        MinusOne();
        return StartingNum;
    }
}