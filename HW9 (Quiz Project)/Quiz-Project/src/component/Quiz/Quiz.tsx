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
                {currentQ !== 0 && <button onClick={() => setCurrentQ(currentQ => currentQ-1)}>Previous</button>}
                <button onClick={() => setCurrentQ(currentQ => currentQ+1)}>Next</button>
            </div>
        </div>
    );
}

export default Quiz;