function setup() {
    createCanvas(400, 400);
  }
  // Wordle Game
  const secretWord = "apple";
  const maxAttempts = 6;
  let attempts = 0;
  let guessedWord = "_____";
  
  console.log("Welcome to Wordle!");
  console.log(`You have ${maxAttempts} attempts to guess the secret word.`);
  
  while (attempts < maxAttempts) {
    console.log(`Attempt #${attempts + 1}`);
    console.log(`Current word: ${guessedWord}`);
  
    const guess = prompt("Enter your guess:").toLowerCase();
  
    if (guess.length !== secretWord.length) {
      console.log("Invalid guess. Guess a word with the same length as the secret word.");
      continue;
    }
  
    attempts++;
  
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guess[i]) {
        guessedWord = guessedWord.substring(0, i) + secretWord[i] + guessedWord.substring(i + 1);
      }
    }
  
    if (guessedWord === secretWord) {
      console.log(`Congratulations! You guessed the secret word "${secretWord}" in ${attempts} attempts.`);
      break;
    }
  }
  
  if (attempts === maxAttempts) {
    console.log(`Sorry, you've reached the maximum number of attempts. The secret word was "${secretWord}".`);
  
  }
  
  function draw() {
    background(220);
  }
