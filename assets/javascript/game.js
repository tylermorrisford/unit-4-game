// when page loads, set game variables and generate numbers
$(document).ready(function() {
let target = 0;
let mine = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let wins = 0;
let losses = 0;
let oneWin = new Audio("assets/sounds/win.mp3");
let oneLoss = new Audio("assets/sounds/loss.mp3");
chooseNumbers();
$("#c1").click(function() {
     console.log("hey c1");
    mine += crystal1;
    $("#myNumber").text(mine);
    scoreCheck();
    });
$("#c2").click(function() {
     console.log("hey c2");
     mine += crystal2;
     $("#myNumber").text(mine);
     scoreCheck();
    });
$("#c3").click(function() {
     console.log("hey c3");
     mine += crystal3;
     $("#myNumber").text(mine);
     scoreCheck();
    });
$("#c4").click(function() {
     console.log("hey c4");
     mine += crystal4;
     $("#myNumber").text(mine);
     scoreCheck();
    });


// Random numbers: target between 19-120; crystals between 1-12
function chooseNumbers() {
target = getRandomRange(19,120);
$('#targetNumber').text(target);
crystal1 = getRandomRange(1,12);
crystal2 = getRandomRange(1,12);
crystal3 = getRandomRange(1,12);
crystal4 = getRandomRange(1,12);
console.log( "c1 = " + crystal1 + " //  c2 = " + crystal2 + " //  c3 = " + crystal3 + " //  c4 = " + crystal4 + ".")

}

// function to reset game for next round
function reset() {
target = 0;
mine = 0;
$('#myNumber').text(mine);
crystal1 = 0;
crystal2 = 0;
crystal3 = 0;
crystal4 = 0;
chooseNumbers();
}


// random number range
function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
//____GAME PLAY: if the user score > target, loss; if the score = target, win___
function scoreCheck() {
    if (mine === target) {
        wins++;
        $("#winNumber").text(wins);
        oneWin.play();
        reset();
    } else if (mine > target) {
        losses++;
        $("#lossesNumber").text(losses);
        oneLoss.play();
        reset();
    } else {
        // do nothing
    };
}
});