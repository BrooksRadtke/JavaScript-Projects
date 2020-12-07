function displayType(character)
{
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " can be found in " + character.innerHTML + " games!");
}