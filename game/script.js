const arrows = ['↑', '↓', '←', '→']; // Arrow characters
const arrowKeyMap = {
  '↑': 'w',
  '↓': 's',
  '←': 'a',
  '→': 'd'
};
let currentArrows = [];
let score = 0;
let highScore = localStorage.getItem('highScore');
let currentArrowIndex = 0;
let timerInterval; // Interval variable for the timer
let timerValue = 0;
// Get the selected number of arrows from the dropdown
const numArrows = parseInt(document.getElementById('num-arrows-select').value);
let gameStarted = false; 

if (highScore === null) {
  highScore = 0;
} else {
  highScore = parseInt(highScore); // Parse to integer
}
document.getElementById('score').innerHTML = score;
document.getElementById('highScore').innerHTML = highScore;

// Function to generate arrows based on the specified number
function generateArrows(numArrows) {
  currentArrows = [];
  for (let i = 0; i < numArrows; i++) {
    const randomIndex = Math.floor(Math.random() * arrows.length);
    currentArrows.push(arrows[randomIndex]);
  }
  updateArrows();
}

function updateArrows() {
    const arrowContainer = document.getElementById('arrow-container');
    arrowContainer.innerHTML = ''; // Clear previous arrows
  
    currentArrows.forEach(function(arrow, index) {
      const arrowDiv = document.createElement('div');
      arrowDiv.textContent = arrow;
      arrowDiv.classList.add('arrow'); // Add a CSS class for styling
  
      // Highlight the current arrow
      if (index === currentArrowIndex) {
        arrowDiv.classList.add('current-arrow');
      }
  
      arrowContainer.appendChild(arrowDiv);
    });
  }
  

// Function to start the timer
function startTimer() {
  clearInterval(timerInterval); // Clear any existing interval
  timerInterval = setInterval(function() {
    timerValue += 10; // Increment by 10 milliseconds
    const seconds = Math.floor(timerValue / 1000); // Calculate seconds
    const milliseconds = timerValue % 1000; // Calculate milliseconds
    document.getElementById('timer').innerHTML = seconds + '.' + milliseconds.toString().padStart(3, '0'); // Display in the format "seconds.milliseconds"
  }, 10); // Update the timer every 10 milliseconds
}

function startGame() {
    gameStarted = true; 
    const numArrows = parseInt(document.getElementById('num-arrows-select').value);
    currentArrowIndex = 0;

    // Retrieve high score from local storage
    highScore = localStorage.getItem('highScore');
    if (highScore === null) {
        highScore = 0;
    } else {
        highScore = parseInt(highScore); // Parse to integer
    }
    // Initialize the game with the selected number of arrows
    timerValue = 0;
    generateArrows(numArrows);
    startTimer();
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Clear the timer interval
}

// Function to handle game over
function gameOver() {
  stopTimer(); // Stop the timer

  // Calculate the number of correct inputs
  const numCorrect = score;
  if (score > highScore){
    highScore = score;
    document.getElementById('highScore').innerHTML = highScore;
    localStorage.setItem('highScore', highScore);
}
  // Get the modal overlay and modal content elements
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

  // Display the modal overlay
  modalOverlay.style.display = 'flex';

  // Display the game over screen inside the modal content
  modalContent.innerHTML = `
    <h1>Game Over</h1>
    <p>You got ${numCorrect} arrows right!</p>
    <p>Your time: ${timerValue / 1000} seconds</p>
    <button onclick="resetGame()">Close</button>
  `;
}

document.body.addEventListener('keydown', function(event) {
    if (!gameStarted) {
        // Start the game when any key is pressed
        startGame();
        return;
    }
    
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay.style.display === 'flex') {
        return; // Don't accept inputs if the modal overlay is displayed
    }

    const key = event.key.toLowerCase();

    // Check if the pressed key matches the mapped key of the current arrow
    if (key === arrowKeyMap[currentArrows[currentArrowIndex]]) {
        // Correct key pressed, update score and move to the next arrow
        score++;
        document.getElementById('score').innerHTML = score;

        currentArrowIndex++;
        if (currentArrowIndex >= currentArrows.length) {
            const numArrows = parseInt(document.getElementById('num-arrows-select').value);

            // All arrows have been entered correctly, generate new arrows
            generateArrows(numArrows);
            currentArrowIndex = 0; // Reset the arrow index
        }
        updateArrows(); // Update the displayed arrows
        event.preventDefault(); // Prevent default behavior of arrow keys
    } else {
        // Incorrect key pressed, game over
        gameOver();
    }
});


// Function to reset the game
function resetGame() {
  // Reset score, timer, and current arrows
  gameStarted = false;
  score = 0;
  timerValue = 0;
  currentArrows = [];
  currentArrowIndex = 0;

  // Update the display
  updateArrows();
  document.getElementById('score').innerHTML = score;
  document.getElementById('timer').innerHTML = '0.000';
  document.getElementById('modal-overlay').style.display = 'none';

}

