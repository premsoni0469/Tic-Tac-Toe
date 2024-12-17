let state = [1, 0, 1, 0, 1, 0, 0, 1, 0]

let xCount = 0
let oCount = 0

xCount = 0;
oCount = 0;

// console.log(xCount, oCount);

/*
considering the situation when a match is tied
1   0   1   
0   1   0   
0   1   0
*/

var flag = true; /* This is used for switching between x & o*/

const winnerDiv = document.querySelector('.winner');
document.querySelector('.turn').style.visibility = 'visible';
document.querySelector('.turn').innerHTML = 'Turn for: <p><i class="fa-solid fa-xmark"></i></p>';

document.querySelector('.container').addEventListener('click', (e)=>{       
    /* Here, we wrote querySelector('.container') instead of querySelector('.cell'), since doing so would only select the 1st box only, and we want to access every box in the container.

    So, since there is only one div with class = container, we can select any box from the 9 boxes.
    */

    var boxId = e.target.id; // here, we are storing the id of every box that we click
    
    // console.log(e.target);

    if(boxId !== ""){       /* If boxId is not blank, then only it will go inside */
        if(state[boxId] == 1 || state[boxId] == 0){  /* This is used to check if the box is in its initial state, ie empty, to avoid replacing previous move (ie x to o OR o to x)*/

            if(flag){   /* If flag == true, insert x, else insert o */
                document.querySelector('.turn').style.visibility = 'visible';
                document.querySelector('.turn').innerHTML = 'Turn for: <p><i class="fa-solid fa-o"></i></p>';

                e.target.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                state[boxId] = "x";  /* Sets the state of that boxId as x if the move is 'x'  */
            }
            else{
                document.querySelector('.turn').style.visibility = 'visible';
                document.querySelector('.turn').innerHTML = 'Turn for: <p><i class="fa-solid fa-xmark"></i></p>';

                e.target.innerHTML = `<i class="fa-solid fa-o"></i>`;
                state[boxId] = "o";  /* Sets the state of that boxId as o if the move is 'o'  */
            }
            flag = !flag;
            checkWinner(!flag);
        }
    }
});

/* Creation of function to evaluate winner */

/*
Ways in which the game can be won:
1. all 3 match in row
2. all 3 match in column
3. all 3 match diagonally
*/

/*
    1   0   1               state[0]    state[1]    state[2]
    0   1   0     =>        state[3]    state[4]    state[5] 
    0   1   0               state[6]    state[7]    state[8]
*/

/*
                    -- ROW --
   1. state[0] == state[1] && state[0] == state[2]
   2. state[3] == state[4] && state[3] == state[5]
   3. state[6] == state[7] && state[6] == state[8]
    
                    -- COLUMN --
   1. state[0] == state[3] && state[0] == state[6]
   2. state[1] == state[4] && state[1] == state[7]
   3. state[2] == state[5] && state[2] == state[8]
    
                    -- DIAGONAL --
   1. state[0] == state[4] && state[0] == state[8]
   2. state[2] == state[4] && state[2] == state[6]

*/ 
function checkWinner(flag){  /* Here,the function checkWinner takes argument 'flag' to determine who is the winner */
    if(state[0] === state[1] && state[0] === state[2]){
        // alert("Row 1 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        // console.log(state);
        setPattern(0, 1, 2);
        setDisabled();
    }
    else if(state[3] === state[4] && state[3] === state[5]){
        // alert("Row 2 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(3, 4, 5);
        setDisabled();
    }
    else if(state[6] === state[7] && state[6] === state[8]){
        // alert("Row 3 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(6, 7, 8);
        setDisabled();
    }
    else if(state[0] === state[3] && state[0] === state[6]){
        // alert("Col 1 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(0, 3, 6);
        setDisabled();
    }
    else if(state[1] === state[4] && state[1] === state[7]){
        // alert("Col 2 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(1, 4, 7);
        setDisabled();
    }
    else if(state[2] === state[5] && state[2] === state[8]){
        // alert("Col 3 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(2, 5, 8);
        setDisabled();
    }
    else if(state[0] === state[4] && state[0] === state[8]){
        // alert("Diag 1 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(0, 4, 8);
        setDisabled();
    }
    else if(state[2] === state[4] && state[2] === state[6]){
        // alert("Diag 2 winner")
        if(flag){
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-xmark"></i> Wins!`;

            xCount++;
            // console.log(xCount);
            document.getElementById('xCount').innerText = xCount;

            
        }
        else{
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `<i class="fa-solid fa-o"></i> Wins!`;
            oCount++;
            // console.log(oCount);
            document.getElementById('oCount').innerText = oCount;
            
        }
        setPattern(2, 4, 6);
        setDisabled();
    }
    else{  /* This else block is to check if any empty blocks left or if it's a draw. */
        let count = 9;
        for(let i = 0; i < 9; i++){
            if(state[i] == 'x' || state[i] == 'o'){
                count --;
            }
        }
        if(count == 0){
            // alert("It's a draw!");
            document.querySelector('.winner').style.visibility = 'visible';

            winnerDiv.innerHTML = `It's a draw!`;

        }
    }
}

function setDisabled(){  /* This function is used to disable the remaining boxes after a winner is found */

    for(let i = 0; i < 9; i++){
        if(state[i] == 1 || state[i] == 0){
            state[i] = null;
        }
    }
}

function setPattern(a, b, c){
    document.getElementById(a).style.backgroundColor = '#5cdb5c';
    document.getElementById(b).style.backgroundColor = '#5cdb5c';
    document.getElementById(c).style.backgroundColor = '#5cdb5c';
}

function resetGame(){
    let ans = confirm("Are you sure you want to restart the game?")
    if(ans == true){
        window.location.reload();
    }
}

function restartGame(){
    for(let i = 0; i < 9; i++){
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.backgroundColor = "rgb(206, 206, 206)";
    }
    
    state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
    flag = true;
    document.querySelector('.winner').style.visibility = 'hidden';
}