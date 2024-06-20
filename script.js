let roundsToPlay;
let roundsRemaining;
let humanWins = 0;
let computerWins = 0;

function startGame() {
    roundsToPlay = parseInt(document.getElementById('rounds').value);
    roundsRemaining = roundsToPlay;
    document.getElementById('play-buttons').style.display = 'block';
}

function play(humanChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computer-choice').innerText = computerChoice;

    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (humanChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (humanChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (humanChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
        (humanChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        result = 'Human wins!';
        humanWins++;
    } else {
        result = 'Computer wins!';
        computerWins++;
    }

    document.getElementById('result').innerText = result;
    roundsRemaining--;

    if (roundsRemaining === 0) {
        document.getElementById('overall').innerText = humanWins > computerWins ? `Human wins after winning ${humanWins} of ${roundsToPlay} rounds.` : `Computer wins after winning ${computerWins} of ${roundsToPlay} rounds.`;
        document.getElementById('overall-result').style.display = 'block';
    }

    if (roundsRemaining > 0) {
        document.getElementById('round-result').style.display = 'block';
    } else {
        document.getElementById('round-result').style.display = 'none';
    }
}
