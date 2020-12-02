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

function CarInfo(Make, Model, Year, Color)
{
    this.CarInfo_Make;
    this.CarInfo_Model;
    this.CarInfo_Year;
    this.CarInfo_Color;
}
var Brooks = new CarInfo("Hyundai", "Elantra", 2015, "Silver");
function WhatDoIDrive()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Brooks drives a " + Brooks.CarInfo_Color + " " + Brooks.CarInfo_Make 
    + " " + Brooks.CarInfo_Model + " from " + Brooks.CarInfo_Year;
}