const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const spock = document.getElementById("spock");
const lizard = document.getElementById("lizard");
const play_container = document.getElementById("play_container");
const rock_score = `<button id="rock" style="border-color: #dc3754;box-shadow: inset 0px 4px rgba(128, 128, 128, 0.418), 0px 5px rgba(220, 55, 85, 0.69);"><img src="./images/icon-rock.svg" alt="rock"></button>`;
const scissors_score = `<button id="scissors"><img src="./images/icon-scissors.svg" alt="scissors"></button>`;
const paper_score = `<button id="paper" style="border-color: #4c69f3;box-shadow: inset 0px 4px rgba(128, 128, 128, 0.418), 0px 5px rgba(76, 104, 243, 0.7);"><img src="./images/icon-paper.svg" alt="paper"></button>`;
const lizard_score = `<button id="lizard" style="border-color: #8a5de2;box-shadow: inset 0px 4px rgba(128, 128, 128, 0.418), 0px 5px rgba(137, 93, 226, 0.77);"><img src="./images/icon-lizard.svg" alt="lizard"></button>`;
const spock_score = `<button id="spock" style="border-color: #40b2c9;box-shadow: inset 0px 4px rgba(128, 128, 128, 0.418), 0px 5px rgba(64, 178, 201, 0.7);"><img src="./images/icon-spock.svg" alt="spock"></button>`;
const play_history = [];
const try_again = `<button id="try_again" onclick="refresh()" class="slide-fwd-center">PLAY AGAIN</button>`


document.addEventListener("DOMContentLoaded", () => {
    alert("Double-click on the screen! Go to history")
    refresh();
});


const his_overlay = document.getElementById("his_overlay");
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("dblclick", function (event) {
        alert("Double-click detected on the screen! Go to history");
        his_overlay.style.display = "flex";
        his_overlay.innerHTML = `
            <table>
                <tr>
                    <th>NO</th>
                    <th>YOU</th>
                    <th>HOUSE</th>
                    <th>SCORE</th>
                </tr>
        `;
        if(play_history.length != 0){
            play_history.forEach((member, index) => {
                his_overlay.insertAdjacentHTML(
                "beforeend",
                `
                <tr>
                    <td> ${index+1}</td>
                    <td>${member.you}</td>
                    <td>${member.house}</td>
                    <td>${member.score_val}</td>
                </tr>
                `
                );
            });
        }
        else{
            his_overlay.insertAdjacentHTML("beforeend", `<h2>Try to play!</h2>`);
        }
        his_overlay.insertAdjacentHTML("beforeend", `
            </table>
        `);
        his_overlay.insertAdjacentHTML("beforeend", `<button class="his_button" onclick="go_back()">Close</button>`)
    });
});


const go_back = () => {
    document.getElementById("his_overlay").style.display = "none";
}


const refresh = () => {
    play_container.innerHTML = `
        <button id="scissors" onclick="on_choose('scissors')"><img src="./images/icon-scissors.svg" alt="scissors"></button>
        <div class="spock_paper">
            <button id="spock" style="border-color: #40b2c9;box-shadow: inset 0px 5px rgba(128, 128, 128, 0.418), 0px 5px rgba(64, 178, 201, 0.7)" onclick="on_choose('spock')"><img src="./images/icon-spock.svg" alt="spock"></button>
            <button id="paper" style="border-color: #4c69f3;box-shadow: inset 0px 5px rgba(128, 128, 128, 0.418), 0px 5px rgba(76, 104, 243, 0.7);" onclick="on_choose('paper')"><img src="./images/icon-paper.svg" alt="paper"></button>
        </div>
        <div class="lizard_rock">
            <button id="lizard" style="border-color: #8a5de2;   box-shadow: inset 0px 5px rgba(128, 128, 128, 0.418), 0px 5px rgba(137, 93, 226, 0.77);" onclick="on_choose('lizard')"><img src="./images/icon-lizard.svg" alt="lizard"></button>
            <button id="rock" style="border-color: #dc3754;   box-shadow: inset 0px 5px rgba(128, 128, 128, 0.418), 0px 5px rgba(220, 55, 85, 0.69);" onclick="on_choose('rock')"><img src="./images/icon-rock.svg" alt="rock"></button>
        </div>
    `
    play_container.style.backgroundImage = 'url("./images/bg-pentagon.svg")';
}


const array = ['rock', 'paper', 'scissors', 'spock', 'lizard'];


const choose = () => {
    const random = Math.floor(Math.random() * array.length);    
    return array[random];
}

const choices = {
    rock: { winsAgainst: "scissors", winsAgainst2: "lizard", score: rock_score},
    paper: { winsAgainst: "rock", winsAgainst2: "spock", score: paper_score},
    scissors: { winsAgainst: "paper", winsAgainst2: "lizard", score: scissors_score},
    spock: { winsAgainst: "rock", winsAgainst2: "scissors", score: spock_score},
    lizard: { winsAgainst: "paper", winsAgainst2: "spock", score: lizard_score}
};


const on_choose = (playerChoice) => {   
    if (!choices[playerChoice]) {
        console.error(`Invalid choice: ${playerChoice}`);
        return;
    }
    play_container.style.backgroundImage = "none"; 
    const computerChoice = choose();
    let result = "";
    if (playerChoice === computerChoice) {
        Tie();
    } else if (choices[playerChoice].winsAgainst === computerChoice || choices[playerChoice].winsAgainst2 === computerChoice) {
        Win(playerChoice, computerChoice);
    } else {
        Lose(playerChoice, computerChoice);
    }
    score.textContent =score_;
    const game = {
        you : playerChoice,
        house : computerChoice,
        score_val : score_
    }
    play_history.push(game);
};


let score_= 0;
const Tie = () => {
    play_container.innerHTML = ` 
        <div class="play_again">
            <h2 class="slide-fwd-center" id="tied">YOU TWO ARE TIED !!<h2>
            <button onclick="refresh()" class="slide-fwd-center" id="t3adol">PLAY AGAIN</button>
        </div>
    `
}

const Win = (playerChoice , computerChoice) => {
    score_ += 1;
    if(screen.width <= 600){
        play_container.innerHTML = `     
        <div class="score_board">
            <div class="phone_screen">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${choices[playerChoice].score}</span>
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${choices[computerChoice].score}</span>
                </div>
            </div>
            <div class="play_again">
                <h2 class="slide-fwd-center">YOU WIN !!<h2>
                ${try_again}
            </div>
        </div>
    `
    }
    else{
        play_container.innerHTML = `     
        <div class="score_board">
            <div class="chosen_board">
                <h2>YOU PICKED</h2>
                <span class="winner">${choices[playerChoice].score}</span>
            </div>
            <div class="play_again">
                <h2 class="slide-fwd-center">YOU WIN !!<h2>
                ${try_again}
            </div>
            <div class="chosen_board">
                <h2>THE HOUSE PICKED</h2>
                <span class="span_animation">${choices[computerChoice].score}</span>
            </div>
        </div>
    `
    }
}


const Lose = (playerChoice , computerChoice) => {
    score_ -= 1;
    if(screen.width <= 600){
        play_container.innerHTML = `     
        <div class="score_board">
            <div class="phone_screen">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${choices[playerChoice].score}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${choices[computerChoice].score}</span></span>
                </div>
            </div>
            <div class="play_again">
                <h2 class="slide-fwd-center">YOU LOSE !<h2>
                ${try_again}
            </div>
        </div>
    `
    }
    else {
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${choices[playerChoice].score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE !<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${choices[computerChoice].score}</span></span>
                </div>
            </div>
        `
    }
}


const show_rules = () => {
     document.getElementById("overlay").style.display = "flex";
}


const hide_rules = () => {
    document.getElementById("overlay").style.display = "none";
}


["DOMContentLoaded", "resize"].forEach(event => {
    document.addEventListener("DOMContentLoaded", function () {
    if(screen.width <= 600){
        const rules_screen_s = document.getElementById("rules_part");
        rules_screen_s.innerHTML = `
            <div class="rules_s">
                <h1>Rules</h1>
                <img src="./images/image-rules-bonus.svg" alt="roles">
                <img src="./images/icon-close.svg" alt="close x" onclick="hide_rules()" width="20" height="20">
            </div>
        `;
    }
    else{
        const rules_screen_s = document.getElementById("rules_part");
        rules_screen_s.innerHTML = `
            <div class="close_rules">
                    <h1>Rules</h1>
                    <img src="./images/icon-close.svg" alt="close x" onclick="hide_rules()" width="20" height="20">
            </div>
            <img src="./images/image-rules-bonus.svg" alt="roles">
        `;
    }
})
});