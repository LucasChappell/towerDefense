let startPageBackground = document.getElementById('startPageBackground');
let startButton = document.getElementById('startButton');
let gameArea = document.getElementById('gameArea');
let enemyCount = 50;
window.onload = function(){
    onStart();
}
function onStart(){
startButton.addEventListener('click', startGame);

}


function startGame(){
    startPageBackground.style.opacity = 0;
    startButton.removeEventListener('click', startGame);
    createEnemies()
    randY()
    

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
        badGuy.id = "badGuy" + i;
        badGuy.classList.add('badGuy');
        gameArea.appendChild(badGuy);
        
    }
}
function moveEnemies(){

}