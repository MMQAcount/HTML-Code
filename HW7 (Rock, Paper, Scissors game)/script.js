let score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let score_ = 0;
score.textContent =score_;

const array = ['rock', 'paper', 'scissor'];

const choose = () => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const on_choose = (value) => {
    const choice = choose();
    console.log(choice);
    
    if (choice == 'rock' && value == 'scissor'){
        score_ -= 1;
    }
    else if (choice == 'scissor' && value == 'rock'){
        score_ += 1;
    }
    else if (choice == 'rock' && value == 'paper'){
        score_ += 1;
    }
    else if (choice == 'paper' && value == 'rock'){
        score_ -= 1;
    }
    else if (choice == 'scissor' && value == 'paper'){
        score_ -= 1;
    }
    else if (choice == 'paper' && value == 'scissor'){
        score_ += 1;
    }
    else{
        console.log("ta3adol");
    }
    score.textContent =score_;
    console.log(score_);
}

const show_rules = () => {
     document.getElementById("overlay").style.display = "flex";
}
const hide_rules = () => {
    document.getElementById("overlay").style.display = "none";
}