function validateForm()
{
    var x = document.forms["forms"]["fname"].value;
    if(x==="")
    {
        alert("Please complete all fields, then resubmit the form");
        return false;
    }
}