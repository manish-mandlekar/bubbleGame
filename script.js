var timer = 61;
var score = 0;
var bubble;
var hit;



var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var scoreelem = document.querySelector('#scoreelem');




setInterval(function () {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;

    }
    else{
        btmpnl.innerHTML = '<h1 id="center" >Game Over.<h1>';
    }
}, 1000);


function makeBubbles() {
    for (var i = 0; i < 153; i++) {
        bubble = Math.floor(Math.random() * 10);
        var template = ` <div class="bubble">${bubble}</div>`;
        btmpnl.innerHTML += template;
    }
};

btmpnl.addEventListener('click', function (details) {
    var clickedBubVlu = details.target.textContent;
    console.log(clickedBubVlu);
    if (clickedBubVlu == hit) {
        score = score + 10;
        scoreelem.textContent = score;
        hitGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
    else {
        console.log('sahi nahi hua hit !');
    }
});


function hitGuess() {
    hit = Math.floor(Math.random() * 10);
    hitelem.textContent = hit;
};




hitGuess();
makeBubbles();