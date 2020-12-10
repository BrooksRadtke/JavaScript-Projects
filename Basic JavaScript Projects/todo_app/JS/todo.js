//This function gets the task from input
function get_todos()
{
    //creates an array of created tasks
    var todos = new Array;
    //this pulls the task that was saved in the browser memory
    var todos_str = localStorage.getItem('todo');
    //if input is not null, then JSON.parse will
    //communicate with the browser to make the task a JS obj
    if(todos_str !== null)
    {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//adds inputed task to the get_todos() array
function add()
{
    //takes inputed task and creates a variable of it
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //converts task to json string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//keeps tasks permanently displayed on screen
function show()
{
    //sets task that was retrieved as a variable
    var todos = get_todos();

    //sets up task as an unordered list
    var html = '<ul>';
    //displays task to the list in the order that it was inputed
    for(var i = 0; i < todos.length; i++)
    {
        //displays the task as a list and creates a button w/ 'x'
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    //displays task as a list
    document.getElementById('todos').innerHTML = html;
}

//displays the inputed task when the "add item" button is clicked
document.getElementById('add').addEventListener('click', add);
//keeps inputs permanently on screen
show();