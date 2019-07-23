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