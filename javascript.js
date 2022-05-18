let color = `black`;
let click = false;
let drawing = false;

/** It creates a grid of divs with a size of the user's choic @param size - the number of rows and columns to create */
function createDivs(size) {
    
    let panel = document.getElementById(`main`);
    let div = panel.querySelectorAll(`div`);
    div.forEach((div) => div.remove());
    panel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    panel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
       let div = document.createElement(`div`); 
       div.addEventListener(`mouseover`, colorDivs);
       div.style.backgroundColor = `white`;   
       panel.appendChild(div);
    };

};

createDivs(16);

/* validation for the div creations*/
function changeSize(input) {
    if(input >= 2 || input <= 100) {
        createDivs(input);
    } else {
        console.log(`too many squares`)
    }
   };

/* this function is needed to change the color based on the choice */   
function colorDivs() {
    if(click) {
     if(color === "random") {
       this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
     } else if(color === `white`) {
         this.style.backgroundColor = `white`;
     } else {
        let colorInput = document.getElementById(`inputColor`);
        let color = colorInput.value;
        this.style.backgroundColor = color;
    }
   }
};

function changeColor(choice) {
    color = choice;
};
/* reset the panel to white */
function reset() {
    let panel = document.getElementById(`main`);
    let div = panel.querySelectorAll(`div`);
    div.forEach((div) => div.style.backgroundColor = `white` );
}

/* It's a function that allows to change the color of the divs when the user clicks on the panel. */
document.getElementById(`main`).addEventListener(`click`, (e) => {
    if(e.target.tagName != `BUTTON`) {
    click = !click; }
});

/* It's a function that allows to change the color of the light when drawing mode is on or viceversa. */
document.getElementById(`main`).addEventListener(`click`, (e) => {
    if(e.target.tagName != `BUTTON` || e.target.tagName != `size`) {
        drawing = !drawing;
    }
       if(drawing === true) {
        let circle = document.getElementById(`circle`);
        let redCircle = document.getElementById(`circleRed`);
        circle.style.display = "none";
        redCircle.style.display = "block";
    
    } else {
        let redCircle = document.getElementById(`circleRed`);
        let circle = document.getElementById(`circle`);
        redCircle.style.display = "none";
        circle.style.display = "block";
    }

});

const audio = document.getElementById("suono");
let buttonG = document.getElementById(`a`);
buttonG.onclick = playAudio;
let countAudio = 2;

/* this function is needed to play/pause the audio */
function playAudio () {
    if (countAudio === 2) {
        audio.play()
        audio.volume = 0.025;
        let countOudio = 1;
        countAudio = countOudio;

    } else {
        audio.pause(); 
        let countOudio = 2;
        countAudio = countOudio;
    }
}



