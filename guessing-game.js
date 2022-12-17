function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let count = 0; 
    let gameOver = false; 
    return function(guess) {
        count++; 
        if(!gameOver){
            if(guess === num){
                gameOver = true; 
                return `You win! You found ${num} in ${count} guesses.`
            } else if (guess < num){
                return `${guess} is too low!`
            } else {
                return `${guess} is too high!`
            }
        } else {
            return "The game is over, you already won!";
        }
    }
}

module.exports = { guessingGame };
