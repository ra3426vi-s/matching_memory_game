/*
 * Create a list that holds all of your cards
 */
let deck= document.querySelector(".deck");
let restart=document.querySelector(".restart");
let elements=document.querySelectorAll(".card");
const chi=[];
const chinod=[];
const chinodclass=[];






/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length;
    var randomIndex;
    var temporaryValue;
    

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(randomIndex)
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        
    }
     console.log(array)
    return array;
}
deck.addEventListener('click',function (e) {
    console.log(e.target)

  let x = e.target;
 
    e.target.classList.add("open","show")
    

})

restart.addEventListener('click',function (e) {
   
    //var deckopen=document.getElementsByClassName("fa fa-diamond")
   
    
    //console.log(deckopen);
    //console.log(deckopen);
  
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("card","open","show");
        elements[i].classList.add("card");
        chi[i]=elements[i].children;
        chinod[i]=elements[i].childNodes[1]
        chinodclass[i]=elements[i].childNodes[1].classList
       // console.log(chinodclass[i])
        

     }
     //console.log(chi);
     var ele= shuffle(chinod);
     //console.log(chinodclass);
     
     
     for (var i = 0; i < ele.length; i++) {
     elements[i].childNodes[1].replaceWith(ele[i])
     }
     
     
    // elements[0].childNodes[0].classList.add("fa fa-paper-plane-o")

     

     
    
  
 
})

  
       
// function cardopen(){
//     console.log("working caedopen")
    
   


// }


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
