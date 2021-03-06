// Create an Array of at least 3 losing messages
var messages = [
    'try again',
    'better luck next time',
    'not quite right...'
]

// Create variables to count wins and losses
var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')
for (let i = 0; i < boxElements.length; i ++) {
    var boxElement = boxElements[i];

    boxElement.onclick = function(event) {

        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a Number and store it to a variable

        // console.log(event.target.textContent)
        var numWasClicked = Number(event.target.textContent)
        // console.log(parseInt(boxNumWasClicked, 10))
    }
}


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var theRandomNumber = Math.floor(Math.random() * 3) + 1;
sessionStorage.setItem("firstNumberClicked", theRandomNumber);
var

// determine if the box clicked is equal to the random number
if ('numWasClicked' = theRandomNumber)
    console.log('Matched');
else
    console.log('messages')
// if the numbers match, display a winning message by changing the text content of the div#message element

// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses