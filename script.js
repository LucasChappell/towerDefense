let startPageBackground = document.getElementById('startPageBackground');
let startButton = document.getElementById('startButton');
const gameArea = document.querySelector('#gameArea');
let root = document.documentElement;
let enemyCount = 50;
let mousecolor = "#";
let points = document.getElementById('points');

window.onload = function(){
    onStart();
}
function onStart(){
startButton.addEventListener('click', startGame);

}


function startGame(){
    startPageBackground.style.opacity = 0;
    startPageBackground.style.left = '105vw';
    startButton.removeEventListener('click', startGame);
    createEnemies()
    randY()
    createBox(25)
    

}

function randY(){
    let yNum = Math.floor((Math.random() * 5) + 1);
    if (yNum == 1){
        let yPos = null;
    } else if (yNum == 2){
        console.log('2')
    }else if (yNum == 3){
        console.log('3')
    } else if (yNum == 4){
        console.log('4')
    } else if (yNum == 5){
        console.log('5')
    }
}

function createEnemies(yPos){
    
    for(i = 0;i < enemyCount; i++){
        
        const badGuy = document.createElement('div') 
        badGuy.style.top = yPos;
        badGuy['name'] = 'name' + i
        badGuy.classList.add('badGuy');
        gameArea.appendChild(badGuy);
        console.log(badGuy.name);
        
    }
}
function fire(){

}
function placeTurret(){

}
function sellTurret(){

}
function moveEnemies(){

}
function enemyAttack(){

}


function createBox(dimension){
    root.style.setProperty('--row-height',(95/dimension) + "%");
    let autos = "";
    for (k = 0; k < dimension; k++){
        autos += " auto";
    }
    root.style.setProperty('--cols',autos);
    for (j = 0; j < dimension; j++){
        const row = document.createElement("div");
        for (i = 0; i < dimension; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        gameArea.appendChild(row);
    } 
}
