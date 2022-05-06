const scoreElmt = document.getElementById('score')
const matchElem = document.getElementById('match')
const matchResult = document.getElementById('matchResult')

let playerScore = 0
let computerScore = 0
scoreElmt.innerHTML = 'Vous: ' + playerScore + ', Ordinateur: ' + computerScore

let displayScore = false
let displayMatch = false

function game(playerChoice) {
    let cptChoice = computerChoice();
    matchElem.innerHTML = ''
    matchResult.innerHTML = ''
    let result = null

    switch (playerChoice) {
        case 'pierre':
            if (cptChoice === 'pierre') {
                result = 'draw';
            } else if (cptChoice === 'papier') {
                result = 'lose';
                computerScore += 1
            } else {
                result = 'win';
                playerScore += 1
            }
            matchRst(result)
            break;

        case 'papier':
            if (cptChoice === 'pierre') {
                result = 'win';
                playerScore += 1
            } else if (cptChoice === 'papier') {
                result = 'draw';
            } else {
                result = 'lose';
                computerScore += 1
            }
            matchRst(result)
            break;

        case 'ciseaux':
            if (cptChoice === 'pierre') {
                result = 'lose';
                computerScore += 1
            } else if (cptChoice === 'papier') {
                result = 'win';
                playerScore += 1
            } else {
                result = 'draw';
            }
            matchRst(result)
            break;
        default:
            alert('Vous ne pouvez pas jouer cela au Shifumi!');
            break;
    };

    scoreElmt.innerHTML = 'Vous: ' + playerScore + ', Ordinateur: ' + computerScore
    dpMatch(playerChoice, cptChoice);
    console.log({
        playerScore,
        computerScore
    })
    setTimeout(() => endGame(), 200)
    
};

function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = null;

    if (random === 0) {
        computerChoice = 'pierre';
    } else {
        random === 1 ? computerChoice = 'papier' : computerChoice = 'ciseaux';
    };
    return computerChoice;
};


function dpMatch(player, computer) {
    matchElem.hidden = false
    matchElem.innerHTML = 'Vous jouez: <b>' + player + '! </b><br>' + 'L\'Ordinateur joue: <b>' + computer + '</b>!'
}

function matchRst(result) {
    matchResult.hidden = false
    if (result === 'win') {
        matchResult.innerHTML = "Vous <b>remportez</b> cette manche."
    } else if (result === 'draw') {
        matchResult.innerHTML = "C'est une <b>égalité</b>."
    } else {
        matchResult.innerHTML = "Vous avez <b>perdu</b> cette manche."
    }
}

function restart() {
    scoreElmt.innerHTML = null
    matchElem.innerHTML = null
    matchResult.innerHTML = null
    playerScore = 0
    computerScore = 0
    displayScore = false
    displayMatch = false
    
    matchElem.hidden = true
    matchResult.hidden = true
    scoreElmt.innerHTML = `Vous: ${playerScore}, Ordinateur: ${computerScore}`
}

function endGame() {
    console.log('test victoire')
    if (playerScore >= 3) {
        alert('Vous avez gagné la partie!');
        restart();
    } else if (computerScore >= 3) {
        alert('Vous avez perdu la partie!');
        restart();
    }
}
