//form validation
function validateForm()
{
    var x = document.forms["basicForm"]["fname"].value;
    var y = document.forms["basicForm"]["lname"].value;
    if(x == "")
    {
        alert("Please tell us your first name");
        return false;
    }

    if(y == "")
    {
        alert("Please tell us your last name");
        return false;
    }
}