const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const spock = document.getElementById("spock");
const lizard = document.getElementById("lizard");
const play_container = document.getElementById("play_container");
const rock_score = `<button id="rock" style="border-color: #dc3754;box-shadow: inset 0px 4px rgba(128, 128, 128, 0.418), 0px 5px rgba(220, 55, 85, 0.69);"><img src="./images/icon-rock.svg" alt="rock"></button>`;
const scissors_score = `<button id="scissor"><img src="./images/icon-scissors.svg" alt="scissors"></button>`;
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
        his_overlay.innerHTML = ``;
        if(play_history.length != 0){
            play_history.forEach((member, index) => {
                his_overlay.insertAdjacentHTML(
                "beforeend",
                `
                <table>
                <tr>
                    <th>NO</th>
                    <th>YOU</th>
                    <th>HOUSE</th>
                    <th>SCORE</th>
                </tr>
                <tr>
                    <td> ${index+1}</td>
                    <td>${member.you}</td>
                    <td>${member.house}</td>
                    <td>${member.score_val}</td>
                    </tr>
            </table>
                `
                );
            });
        }
          else{
                his_overlay.insertAdjacentHTML("beforeend", `<h2>Try to play!</h2>`);
          }
        his_overlay.insertAdjacentHTML("beforeend", `<button class="his_button" onclick="go_back()">Close</button>`)
    });
});
const go_back = () => {
    document.getElementById("his_overlay").style.display = "none";
}
const refresh = () => {
    play_container.innerHTML = `
        <button id="scissor" onclick="on_choose('scissor')"><img src="./images/icon-scissors.svg" alt="scissors"></button>
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
const array = ['rock', 'paper', 'scissor', 'spock', 'lizard'];

const choose = () => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
let score_= 0;
const on_choose = (value) => {
    play_container.style.backgroundImage = "none";
    const choice = choose();
    if (choice == 'rock' && value == 'scissor' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${scissors_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${rock_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'scissor' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${scissors_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${rock_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'rock' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${rock_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${scissors_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'rock' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${rock_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${scissors_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'paper' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${paper_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${rock_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'paper' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${paper_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${rock_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'rock' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${rock_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${paper_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'rock' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${rock_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${paper_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'paper' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${paper_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${scissors_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'paper' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${paper_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${scissors_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'scissor' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${scissors_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${paper_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'scissor' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${scissors_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${paper_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'lizard' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${lizard_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${rock_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'lizard' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${lizard_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${rock_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'rock' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${rock_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${lizard_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'rock' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${rock_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${lizard_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'lizard' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${lizard_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${spock_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'lizard' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${lizard_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${spock_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'spock' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${spock_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${lizard_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'spock' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${spock_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${lizard_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'scissor' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${scissors_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${spock_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'scissor' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${scissors_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${spock_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'spock' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${spock_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${scissors_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'spock' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${spock_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${scissors_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'paper' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${paper_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${spock_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'paper' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${paper_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${spock_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'spock' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${spock_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${paper_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'spock' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${spock_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${paper_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'rock' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${rock_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${spock_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'spock' && value == 'rock' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${rock_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${spock_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'spock' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${spock_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${rock_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'rock' && value == 'spock' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${spock_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${rock_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'lizard' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${lizard_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${paper_score}</span>
                </div>
            </div>
        `
    }
    else if (choice == 'paper' && value == 'lizard' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${lizard_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${paper_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'paper' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${paper_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${lizard_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'paper' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${paper_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${lizard_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'lizard' && screen.width > 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    ${lizard_score}
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="winner"><span class="span_animation">${scissors_score}</span></span>
                </div>
            </div>
        `
    }
    else if (choice == 'scissor' && value == 'lizard' && screen.width <= 500){
        score_ -= 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        ${lizard_score}
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="winner"><span class="span_animation">${scissors_score}</span></span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU LOSE<h2>
                    ${try_again}
                </div>
            </div>
        `
    }
    else if (choice == 'lizard' && value == 'scissor' && screen.width > 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="chosen_board">
                    <h2>YOU PICKED</h2>
                    <span class="winner">${scissors_score}</span>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
                <div class="chosen_board">
                    <h2>THE HOUSE PICKED</h2>
                    <span class="span_animation">${lizard_score}</span>
                </div>
            </div>
        `    
    }
    else if (choice == 'lizard' && value == 'scissor' && screen.width <= 500){
        score_ += 1;
        play_container.innerHTML = `     
            <div class="score_board">
                <div class="phone_screen">
                    <div class="chosen_board">
                        <span class="winner">${scissors_score}</span>
                        <h2>YOU PICKED</h2>
                    </div>
                    <div class="chosen_board">
                        <span class="span_animation">${lizard_score}</span>
                        <h2>THE HOUSE PICKED</h2>
                    </div>
                </div>
                <div class="play_again">
                    <h2 class="slide-fwd-center">YOU WIN<h2>
                    ${try_again}
                </div>
            </div>
        `    
    }
    else{
        play_container.innerHTML = ` 
            <div class="play_again">
                <h2 class="slide-fwd-center" id="tied">YOU TWO ARE TIED !!<h2>
                <button onclick="refresh()" class="slide-fwd-center" id="t3adol">PLAY AGAIN</button>
            </div>
        `
    }
    score.textContent =score_;
    const game = {
        you : value,
        house : choice,
        score_val : score_
    }
    play_history.push(game);
}
const show_rules = () => {
     document.getElementById("overlay").style.display = "flex";
}
const hide_rules = () => {
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    if(screen.width <= 500){
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
});
