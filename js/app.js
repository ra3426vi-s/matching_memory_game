/*
 * Create a list that holds all of your cards
 */
let deck = document.querySelector(".deck");
let restart = document.querySelector(".restart");
let elements = document.querySelectorAll(".card");
let timer = document.querySelector(".timer");
let stars = document.querySelector(".stars ");
let score = document.querySelector(".moves");

//let cardopen= document.querySelectorAll(".card.open.show");

let anchorelements = document.querySelectorAll(".card i");
allclasses = [];
cardopen = [];
var sec = 0;
var min = 0;
var start = 0;
var intervalStart;
var moves = 0;
var match = 0;

for (let i = 0; i < anchorelements.length; i++) {
  allclasses.push(anchorelements[i].className);
}
// let test =document.querySelectorAll(".card" ,".fa",".fa-cube")
//console.log(allclasses)
// const chi=[];
// const chinod=[];
// const chinodclass=[];
// let x

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex,
    temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    console.log(randomIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  return array;
}
var k = 0;
var count = 1;
array = [];
deck.addEventListener("click", function (e) {
  e.target.classList.add("open", "show");

  if (start == 0) {
    intervalStart = window.setInterval(timerStart, 1000);
    start = start + 1;
  }

  console.log(e.target);
  cardopen.push(e.target.querySelector(".card i"));
  console.log(cardopen);

  if (cardopen.length % 2 == 0) {
    if (
      cardopen[cardopen.length - 2].className !=
      cardopen[cardopen.length - 1].className
    ) {
      //console.log("not equal")
      setTimeout(function () {
        // Instructions after delay

        for (var i = 0; i < elements.length; i++) {
          //elements[i].classList.remove("card","open","show");
          if (cardopen[cardopen.length - 2] == anchorelements[i]) {
            elements[i].classList.remove("open", "show");
          }
          if (cardopen[cardopen.length - 1] == anchorelements[i]) {
            elements[i].classList.remove("open", "show");
          }
        }
        cardopen = [];
        moves = moves + 1;
      }, 2000);
    }
    if (
      cardopen[cardopen.length - 2].className ==
      cardopen[cardopen.length - 1].className
    ) {
      //console.log("equal")
      cardopen = [];
      moves = moves + 1;
      match = match + 2;
    }
  }
  rating();
});

restart.addEventListener("click", function (e) {
  //var deckopen=document.getElementsByClassName("fa fa-diamond")

  //console.log(deckopen);
  //console.log(deckopen);

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("card", "open", "show");
    elements[i].classList.add("card");
    // chi[i]=elements[i].children;
    // chinod[i]=elements[i].childNodes[1]
    // console.log(chinod[i]);
    //chinodclass[i]=elements[i].childNodes[1].classList
    // console.log(chinodclass[i])
  }
  //console.log(chinod);
  var ele = shuffle(allclasses);
  //var cardte=shuffle(elements);
  //console.log("hi",cardte[0]);

  for (var i = 0; i < ele.length; i++) {
    //console.log("hey",elements[i].childNodes[1])
    anchorelements[i].className = ele[i];
    //  console.log("hi tfis is here")
    //  console.log(elements[i].childNodes[1])
  }
  timerReset();

  // elements[0].childNodes[0].classList.add("fa fa-paper-plane-o")
});
function timerStart() {
  sec = sec + 1;
  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }

  if (sec < 10 && min < 10) {
    timer.innerHTML = "0" + min + ":" + "0" + sec;
  }
  if (sec >= 10 && min < 10) {
    timer.innerHTML = "0" + min + ":" + sec;
  }
  if (sec < 10 && min >= 10) {
    timer.innerHTML = min + ":" + "0" + sec;
  }
  if (sec >= 10 && min >= 10) {
    timer.innerHTML = min + ":" + sec;
  }
}
function timerReset() {
  window.clearInterval(intervalStart);
  timer.innerHTML = "0" + "0" + ":" + "0" + "0";
}
function timerPause() {
  window.clearInterval(intervalStart);
  if (sec < 10 && min < 10) {
    timer.innerHTML = "0" + min + ":" + "0" + sec;
  }
  if (sec >= 10 && min < 10) {
    timer.innerHTML = "0" + min + ":" + sec;
  }
  if (sec < 10 && min >= 10) {
    timer.innerHTML = min + ":" + "0" + sec;
  }
  if (sec >= 10 && min >= 10) {
    timer.innerHTML = min + ":" + sec;
  }
}

function rating() {
  if (match == elements.length) {
    console.log("i am in in rating");
    timerPause();
    if (moves <= 10) {
      stars.children[0].className = "rating";
      stars.children[1].className = "rating";
      stars.children[2].className = "rating";
      score.innerHTML = moves;
    }
    if (moves > 10) {
      stars.children[0].className = "rating";
      stars.children[1].className = "rating";
      score.innerHTML = moves;
    }
    if (moves >= 20) {
      stars.children[0].className = "rating";
      score.innerHTML = moves;
    }
  }
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
