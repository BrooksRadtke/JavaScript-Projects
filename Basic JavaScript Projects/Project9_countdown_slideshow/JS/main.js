function countdown()
{
    var seconds = document.getElementById("seconds").value;

    function tick()
    {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick,1000);
        if(seconds == -1)
        {
            alert("Time's up!");
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/prev. controls
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n)
{
    showSlide(slideIndex = n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementById("mySLides");
    var dots = document.getElementById("dot");
    if(n > slides.length) 
    {
        slideIndex = 1;
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].classname.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}