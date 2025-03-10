import { useState } from 'react';
import './Quiz.css';
import Question from '../Question/Question';

interface IQuestion {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    trueAnswer: string
}
const quizQuestions:IQuestion[] = [
    {
        question: "What is the capital of France?",
        answer1: "Berlin",
        answer2: "Madrid",
        answer3: "Paris",
        trueAnswer: "answer3" // Paris
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer1: "Earth",
        answer2: "Mars",
        answer3: "Jupiter",
        trueAnswer: "answer2" // Mars
    },
    {
        question: "What is the largest mammal in the world?",
        answer1: "Elephant",
        answer2: "Blue Whale",
        answer3: "Giraffe",
        trueAnswer: "answer2" // Blue Whale
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer1: "Oxygen",
        answer2: "Carbon Dioxide",
        answer3: "Nitrogen",
        trueAnswer: "answer2" // Carbon Dioxide
    },
    {
        question: "How many continents are there on Earth?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        trueAnswer: "answer3" // 7
    }
];

const Quiz = () => {
    const [currentQ, setCurrentQ] = useState(0);
    return (
        <div className="quiz-container">
            <div className="header">
                <h3>Quiz</h3>
                <h3>Question {currentQ+1}</h3>
            </div>
            <div className="question-container">
                <Question data={quizQuestions[currentQ]}/>
                <div className="next-prev">
                    {currentQ !== 0 && <a onClick={() => setCurrentQ(currentQ => currentQ-1)}>
                        <svg fill="rgba(96, 66, 136, 0.781)" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459 459" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459C356.25,459,459,356.249,459,229.5S356.25,0,229.5,0z M351.738,246.077c-0.063,0.071-0.122,0.144-0.185,0.214c-0.659,0.723,4.184-4.144-85.051,85.091 c-9.757,9.757-25.586,9.77-35.356,0c-9.763-9.763-9.763-25.592,0-35.355l41.527-41.527h-146.7c-13.808,0-25-11.193-25-25 s11.192-25,25-25h146.701l-41.527-41.527c-9.763-9.763-9.763-25.592,0-35.355c9.764-9.763,25.592-9.763,35.356,0 c89.798,89.798,84.708,84.629,85.852,86.022C360.134,223.129,359.904,236.87,351.738,246.077z"></path> </g> </g> </g></svg>
                    </a>}
                    <a onClick={() => setCurrentQ(currentQ => currentQ+1)}>
                        <svg fill="rgba(96, 66, 136, 0.781)" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 459 459" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459C356.25,459,459,356.249,459,229.5S356.25,0,229.5,0z M351.738,246.077c-0.063,0.071-0.122,0.144-0.185,0.214c-0.659,0.723,4.184-4.144-85.051,85.091 c-9.757,9.757-25.586,9.77-35.356,0c-9.763-9.763-9.763-25.592,0-35.355l41.527-41.527h-146.7c-13.808,0-25-11.193-25-25 s11.192-25,25-25h146.701l-41.527-41.527c-9.763-9.763-9.763-25.592,0-35.355c9.764-9.763,25.592-9.763,35.356,0 c89.798,89.798,84.708,84.629,85.852,86.022C360.134,223.129,359.904,236.87,351.738,246.077z"></path> </g> </g> </g></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Quiz;