// LOGIC

let score = 0;
let playerChoice;

let readble = {
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
};

// We create an obj that store a function which generate random number between 0 and 2
// this it will be the choice of our computer

let cpuChoice = {
    init: function () {
        this.store = Math.floor(Math.random() * 3);
        this.text = readble[this.store];
    },
    store: '',
    text: '',
};

cpuChoice.init();
// console.log('cpuChoice:', cpuChoice.store, cpuChoice.text);

// choose the winner

const order = [0, 1, 2, 0];

let chooseWinner = function (player, cpu) {
    if (order[player] === order[cpu]) {
        return "The fame is tied. Try again?";
    } else if (order[player] === order[cpu + 1]) {
        score++;
        return 'You won!';
    } else {
        score--;
        return 'You lost! :(';
    }
};

// logic :
let assignClick = function (tag, position) {
    // assign a clik listener
    tag.addEventListener('click', function () {
        // set the player choice
        playerChoice = position;
        // give feedback to the cpu about the cpuChoice
        cpuChoice.init();
        paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
        // determine a winner
        paragraph.innerText += '\n' + chooseWinner(playerChoice,cpuChoice.store);
        // display the winner and the current score
        paragraph.innerText += '\n' + 'SCORE: ' + score;
    });
};

// UI

let paragraph = document.querySelector('p');

let images = {
    tags: document.getElementsByTagName('img'),
    init: function () {
        for(let step = 0; step < this.tags.length; step++){
            assignClick(this.tags[step], step);
        }
    }
};

images.init();