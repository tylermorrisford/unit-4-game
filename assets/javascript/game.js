// when page loads, set game variables and generate numbers
$(document).ready(function() {
let target = 0;
let mine = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
chooseNumbers();
})

// generate random numbers: target between 19-120; crystals between 1-12
function chooseNumbers() {
target = getRandomRange(19,120);
$('#targetNumber').text(target);
console.log(target);
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
  

//   GAME PLAY_____________________________

// if the user clicks the crystals, that amount is added to their score('mine')
$('#c1').click(function() {
    // mine += crystals amount
    alert("hey steve");
});

alert("hey tim");

// if the user score > target, loss; if the score = target, win

// increment wins & losses