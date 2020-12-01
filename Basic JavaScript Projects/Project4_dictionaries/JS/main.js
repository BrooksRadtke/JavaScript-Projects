function dictionary()
{
    var tools =
    {
        toolbox: "storage",
        hammer: "tool",
        screwdriver: "tool",
        nails: "accessory",
        nails: "tool"           //if called, nails will return "tool", not "accessories"
    };
    delete tools.nails;         //returns 'undefined' if called        
    document.getElementById("Dictionary").innerHTML = tools.nails;
}