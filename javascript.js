let color = `black`;
let click = false;
let drawing = false;

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

function changeSize(input) {
    if(input >= 2 || input <= 100) {
        createDivs(input);
    } else {
        console.log(`too many squares`)
    }
   };

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

function reset() {
    let panel = document.getElementById(`main`);
    let div = panel.querySelectorAll(`div`);
    div.forEach((div) => div.style.backgroundColor = `white` );
}

document.getElementById(`main`).addEventListener(`click`, (e) => {
    if(e.target.tagName != `BUTTON`) {
    click = !click; }
});

document.getElementById(`main`).addEventListener(`click`, (e) => {
    if(e.target.tagName != `BUTTON` || e.target.tagName != `size`) {
        drawing = !drawing;
    }
       if(drawing === true) {
        let circle = document.getElementById(`circle`);
        let redCircle = document.getElementById(`circleRed`);
        circle.style.display = "none";
        redCircle.style.display = "block";
        /* document.getElementById("inputColor").disabled = true; */
    
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



