const ship = document.querySelector('.playershooter');
const playArea = document.querySelector('#main-play-area');
const aliens = ['imgs/enemy1.png','imgs/enemy2.png','imgs/enemy3.png'];

function flyShip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown'){
        event.preventDefault();
        moveDown();
    } else if(event.key === ' '){
        event.preventDefault();
        fireLaser();
    }
}

function moveUp(){
    let topPosition = getComputedStyle(ship).getPropertyValue('top');
    if(topPosition === '0px'){
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        ship.style.top = `${position}px`;
    }
}

function moveDown(){
    let topPosition = getComputedStyle(ship).getPropertyValue('top');
    if(topPosition === '-510px'){
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        ship.style.top = `${position}px`;
    }
}

function fireLaser(){
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement(){
    let xPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'imgs/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition-50}px`;
    newLaser.style.top = `${yPosition-10}px`;
    return newLaser;
}

function moveLaser(laser){
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        if(xPosition === 0){
            laser.remove();
        } else {
            laser.style.left = `${xPosition-5}px`;
        }
    }, 10);
}

function createAliens(){
    let newAlien = document.createElement('img');
    let alienSprite = aliens[Math.floor(Math.random()*aliens.length)];
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '-370px';
    newAlien.style.top = `${Math.floor(Math.random()*-330)-30}px`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}

function moveAlien(){
    
}

window.addEventListener('keydown', flyShip);