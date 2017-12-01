window.onload = function () {
    start()
}

function start() {
    displayMaze();
}



let maze = new Array;
maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let wall = 0;
let path = 1;
let x = 1;
let y = 2;
let goal = 3;
let i = 1;
let j = 1;





/*GNRL WIDTH*/
let wallWidth = 15;




function displayMaze() {
    const mazeboard = document.createElement("div");
    mazeboard.setAttribute("id", "mazeboard");
    document.body.appendChild(mazeboard);
    /*style*/
    mazeboard.style.width = 30 * wallWidth + "px";
    mazeboard.style.height = 29 * wallWidth + "px";


    for (lign of maze) {
        for (box of lign) {
            if (box == 0) {
                let wall = document.createElement("div");
                wall.setAttribute("class", "wall")
                document.getElementById("mazeboard").appendChild(wall);
                /*style*/

                wall.style.width = wallWidth + "px";
                wall.style.height = wallWidth + "px";
                wall.style.background = '#FF00FF';
            } else if (box == 1) {
                let path = document.createElement("div");
                path.setAttribute("class", "path");
                document.getElementById("mazeboard").appendChild(path);
                /*style*/

                path.style.width = wallWidth + "px";
                path.style.height = wallWidth + "px";
                path.style.background = '#FFFF00';


            } else if (box == 2) {
                let player = document.createElement("div");
                player.setAttribute("id", "player");
                document.getElementById("mazeboard").appendChild(player);
                /*style*/

                player.style.width = wallWidth + "px";
                player.style.height = wallWidth + "px";
                player.style.background = '#000';

            } else if (box == 3) {
                let goal = document.createElement("div");
                goal.setAttribute("id", "goal");
                document.getElementById("mazeboard").appendChild(goal);
                /*style*/

                goal.style.width = wallWidth + "px";
                goal.style.height = wallWidth + "px";
                goal.style.background = '#00FF00';
            }

        }

    }
}




// switch (maze[i][j]){
// case player : 

// player.style.background ="#000";}


/*déterminer une entrée et une sortie de manière aléatoire 
les deux positions uniquement sur   premiere ou derniere lignes
                                    premiere ou derniere collones
1/lign or column
2/première ou dernière
3/1 case ou dernière case
*/
// function initPath() {


//     }
// }



// KEY_DOWN	= 40;
// KEY_UP		= 38;
// KEY_LEFT	= 37;
// KEY_RIGHT	= 39;



// function touche(e){

//     var touche =(direction.keyCode;

//     var nom = String.fromCharCode(touche);

//     console.log('Vous avez appuyé sur'+nom);

//     } 



function moveAround(direction) {

    let move = direction.keyCode;
    switch (move) {
        
        case 38: //UP
            if (maze[i - 1][j] == 1) { //si la box située dessus est égale à 1(path) alors ok
                maze[i - 1][j] = 2;
                maze[i][j] = 1;
                i--;
                console.log(maze);
                render();
            } else if(maze[i - 1][j] == 0) { //si la box située dessus est égale à 0(wall) alors ne bouge pas
                maze[i][j] = 2;
                console.log("bawwg!");
            }
                break;
            
        case 39: //RIGHT
            if (maze[i][j + 1] == 1) {
                maze[i][j + 1] = 2;
                maze[i][j] = 1;
                j++;
                render();
                console.log(maze);
            } else if(maze[i][j + 1] == 0) {
                maze[i][j] = 2;
                console.log("bawwg!");
            }
            break;
            
            case 40: //DOWN
            if (maze[i + 1][j] == 1) {
                maze[i + 1][j] = 2;
                maze[i][j] = 1;
                i++;
                render();
                console.log(maze);
            } else if (maze[i + 1][j] == 0 ) {
                maze[i][j] = 2;
                console.log("bawwg!");
            }
            break;
            
            case 37: //LEFT
            if (maze[i][j - 1] == 1) {
                maze[i][j - 1] = 2;
                maze[i][j] = 1;
                render();
                j--;
                console.log(maze);
            } else if (maze[i - 1][j] == 0) {
                maze[i][j] = 2;
                console.log("bawwg!");
            }
                break;

        default:
                break;
    }
}

//rendre l'affichage du déplacement
let render = function renderMaze() {
document.body.innerHTML = ("");
displayMaze();

}



//     function makeGride(){
//         let maze02 = new Array ();
//         for (let lign=0; lign<10; lign++)
//             maze02[lign] = new Array(0,0,0,0,0,0,0,0,0,0,0);
//         return maze02;
// 
// }
window.addEventListener("keydown", moveAround);