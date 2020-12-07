//This variable keeps track of whose turn it is
let activePlayer = 'x';
//This [] stores an [] of moves; used to determine win conditions
let selectedSquares = [];

//For placing game icons, i.e. x or o
function placeXorO(squareNumber)
{
    //ensures that a square has not already been selected
    //.some() is used to check each element of the selected []
    //to check if the square has been clicked
    if(!selectedSquares.some(element => element.includes(squareNumber)))
    {
        //retrieves the html element that was clicked
        let select = document.getElementById(squareNumber);
        //condition checks whose turn it is
        if(activePlayer === 'x')
        {
            //if activePlayer is equal to 'x', the x.png is placed in html
            select.style.backgroundImage = "url('./images/Characters/link_walking_2.gif')";
        }
        //activePlayer can only be X or O, 
        else
        {
            //if activePlayer is equal to 'o', the o.png is placed in html
            select.style.backgroundImage = "url('./images/Characters/monster_2.gif')";
        }
        //squareNumber and activePlayer and concatenated and added to []
        selectedSquares.push(squareNumber + activePlayer);
        //Calls function to check for win conditions
        checkWinConditions();
        //condition for changing the active player
        if(activePlayer === 'x')
        {
            //if active player = x, change to o
            activePlayer = 'o';
        }
        //if active player is anything other that 'x'
        else
        {
            //change activePlayer to x
            activePlayer = 'x';
        }
        //Placement sound!!
        audio('./media/Link- Moderate Sword Swish.wav');
        //checks it is cpu's turn
        if(activePlayer === 'o')
        {
            //disables click for computr choice
            disableClick();
            //function waits 1sec. before placing image and 
            //enabling click
            setTimeout(function(){computersTurn(); }, 1000);
        }
        //returns true for computersTurn() to function
        return true;
    }

    //Function results in random square selected
    function computersTurn()
    {
        //bool needed for while loop
        let success = false;
        //var stores random number 0-8
        let pickASquare;
        //allows while loop to keep trying 
        //if a square is already selected
        while(!success)
        {
            //select random number 0 - 8
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number evaluates number returns true, square has not been selected
            if(placeXorO(pickASquare))
            {
                //calls function
                placeXorO(pickASquare);
                //changes bool and ends loop
                success = true;
            }
        }
    }
}

//This function parses the selectedSquares [] to search for win conditions.
//drawWinLine function is called to draw line if condition is met
function checkWinConditions()   //***WHY ISN'T THIS A SWITCH STATEMENT???***
{
    //x 0,1,2 condition
    if (arrayIncludes('0x', '1x', '2x'))
    {
        drawWinLine(50, 100, 558, 100);
    }
    //x 3,4,5 condition
    else if(arrayIncludes('3x','4x', '5x'))
    {
        drawWinLine(50, 304, 558, 304);
    }
    //x 6,7,8 condition
    else if(arrayIncludes('6x','7x', '8x'))
    {
        drawWinLine(50, 508, 558, 508);
    }
    //x 0,3,6 condition
    else if(arrayIncludes('0x','3x', '6x'))
    {
        drawWinLine(100, 50, 100, 558);
    }
    //x 1,4,7 condition
    else if(arrayIncludes('1x','4x', '7x'))
    {
        drawWinLine(304, 50, 304, 558);
    }
    //x 2,5,8 condition
    else if(arrayIncludes('2x','5x', '8x'))
    {
        drawWinLine(508, 50, 508, 558);
    }    
    //x 6,4,2 condition
    else if(arrayIncludes('6x','4x', '2x'))
    {
        drawWinLine(100, 508, 510, 90);
    }
    //x 0,4,8 condition
    else if(arrayIncludes('0x','4x', '8x'))
    {
        drawWinLine(100, 100, 520, 520);
    }
    //o 0,1,2 condition
    else if(arrayIncludes('0o','1o', '2o'))
    {
        drawWinLine(50, 100, 558, 100);
    }
    //o 3,4,5 condition
    else if(arrayIncludes('3o','4o', '5o'))
    {
        drawWinLine(50, 304, 558, 304);
    }
    //o 6,7,8 condition
    else if(arrayIncludes('6o','7o', '8o'))
    {
        drawWinLine(50, 508, 558, 508);
    }
    //o 0,3,6 condition
    else if(arrayIncludes('0o','3o', '6o'))
    {
        drawWinLine(100, 50, 100, 558);
    }
    //o 1,4,7 condition
    else if(arrayIncludes('1o','4o', '7o'))
    {
        drawWinLine(304, 50, 304, 558);
    }
    //o 2,5,8 condition
    else if(arrayIncludes('2o','5o', '8o'))
    {
        drawWinLine(508, 50, 508, 558);
    }    
    //o 6,4,2 condition
    else if(arrayIncludes('6o','4o', '2o'))
    {
        drawWinLine(100, 508, 100, 90);
    }
    //o 0,4,8 condition
    else if(arrayIncludes('0o','4o', '8o'))
    {
        drawWinLine(100, 100, 520, 520);
    }
    //This section checks for a tie. If none of the above conditions register
    //and all 9 squares are selected, execute
    else if(selectedSquares.length >= 9)
    {
        audio('./media/Sound Effect (22).wav');
        setTimeout(function() { resetGame();}, 1000);
    }
    //this function check if an [] includes 3 strings
    //Used to check each win condition
    function arrayIncludes(squareA, squareB, squareC)
    {
        //used to check 3 var in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if all 3 passed var return true, else if drawWinLine executes
        if(a === true && b === true && c === true)
        {
            return true;
        }
    }
}

//temporarily disables the body of the page
function disableClick()
{
    //disables body click
    body.style.pointerEvents = 'none';
    //re-enables body click after 1sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//take the string parameter of previously set paths
function audio(audioURL)
{
    //creates new audio obj and passes it through parameter
    let audio = new Audio(audioURL);
    //play method plays audio!
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2)
{
    //This line accesses out html canvas element
    const canvas = document.getElementById("win-lines");
    //gives access to methods and properties on canvas
    const c = canvas.getContext('2d');
    //indicates the start of of line on x-axis
    let x1 = coordX1, 
    //indicates the start of of line on y-axis
        y1 = coordY1,
    //indicates the end of line on x-axis
        x2 = coordX2,
    //indicates the end of line on y-axis
        y2 = coordY2,
    //stores temp x-axis data we update in the animation loop
        x = x1,
    //stores temp y-axis data we update in the animation loop
        y = y1;

    //This function interacts with canvas
    function animateLineDrawing()
    {
        //variable creates the loop for when the game ends, it restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //starts new path
        c.beginPath();
        //moves to a starting point for line
        c.moveTo(x1, y1);
        //indicates end-point
        c.lineTo(x, y);
        //sets the width of the line
        c.lineWidth = 10;
        //sets the color of the line
        c.strokeStyle = 'rgba(70,235,33, .8)';
        //draws above data
        c.stroke();
        //checks for endpoint
        if(x1 <= x2 && y1 <= y2)
        {
            //adds 10 to the x endpoint
            if(x < x2) {x+=10;}
            //adds 10 to the y endpoint
            if(y < y2) {y+=10;}
            //cancels the endpoints if reached
            if(x >= x2 && y >= y2)
            {
                cancelAnimationFrame(animationLoop);
            }
        }
        //this condition is similar to the one above; necessary for the 6, 4, 2 win
        if(x1 <= x2 && y1 >= y2)
        {
            if(x < x2) {x += 10;}
            if(y > y2) {y -= 10;}
            if( x>= x2 && y <= y2)
            {
                cancelAnimationFrame(animationLoop);
            }
        }
    }
    //clears canvas after our win
    function clear()
    {
        //line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears the canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }

    //disables clicking while win sound is playing
    disableClick();
    //plays win audio
    audio('./media/03 Item.mp3');
    //calls main animation loop
    animateLineDrawing();
    //This line waits 1s, clears canvas, resets game and re-enables clicking
    setTimeout(function() {clear(); resetGame();}, 1000);
}

//Resets game in tie or win
function resetGame()
{
    //for loop that iterates through each html square element
    for(let i = 0; i < 9; i++)
    {
        //var gets the html element of i
        let square = document.getElementById(String(i));
        //removes elements' background
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}

function backgroundMusic() //call on load??
{
    document.getElementById("backgroundMusic");
    audio('./media/02 Overworld.mp3');
}