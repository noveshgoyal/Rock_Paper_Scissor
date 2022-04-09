let compScore_span = document.getElementById('comp-score');
let userScore_span = document.getElementById('user-score');
const rock = document.getElementById('r');
const paper = document.getElementById('p')
const scissor = document.getElementById('s');
const result = document.querySelector('.result > p');

let compScore = 0;
let userScore = 0;

function computerPlay() {
    let x = Math.random();
    if (x <= 0.33) return "r";
    if (x > 0.33 && x <= 0.66) return "p";
    else return "s";
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose() {
    compScore++;
    compScore_span.innerHTML = compScore;
}

function play(user, comp) {
    if (comp == user) {
        return "It's a draw";
    } else if (comp == "r" && user == "p") {
        win(user);
        return "You Win! Paper wraps Rock";
    } else if (comp == "r" && user == "s") {
        lose(user);
        return "You Lose! Rock breaks the Scissor ";
    } else if (comp == "p" && user == "r") {
        lose(user);
        return "You Lose! Paper wraps Rock";
    } else if (comp == "p" && user == "s") {
        win(user);
        return "You Win! Scissor cuts Paper";
    } else if (comp == "s" && user == "p") {
        paper.classList.add('.red-glow');
        lose(user);
        return "You Lose! Scissor cuts Paper";
    } else if (comp == "s" && user == "r") {
        win(user);
        return "You Win! Rock breaks the Scissor";
    }
}

function round() {
    rock.addEventListener('click', function () {
        let comp = computerPlay();
        result.innerHTML = (play("r", comp));
    });

    paper.addEventListener('click', function () {
        let comp = computerPlay();
        result.innerHTML = play("p", comp);
    });

    scissor.addEventListener('click', function () {
        let comp = computerPlay();
        result.innerHTML = (play("s", comp));
    });
}

round();