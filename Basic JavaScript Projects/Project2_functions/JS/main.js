function mOver(obj)                 //displays when mouse is over button
{
    obj.innerHTML = "Thank You"
}
  
function mOut(obj)                  //displays after mouse leaves button
{
    obj.innerHTML = "See you later!"
}

function addStrings()
{
    var sentence = "I am learning";
    sentence += " so much from this JavaScript course with the Tech Academy!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function changeTextColor()
{
    var x = document.getElementById("Concatenate");
    x.style.color = "red";
}