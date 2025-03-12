import { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

interface IQuestion {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    trueAnswer: string;
    selectedAnswer: string;
}
const quizQuestions: IQuestion[] = [
    {
        question: "What is the capital of France?",
        answer1: "Berlin",
        answer2: "Madrid",
        answer3: "Paris",
        trueAnswer: "answer3", // Paris
        selectedAnswer: "",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer1: "Earth",
        answer2: "Mars",
        answer3: "Jupiter",
        trueAnswer: "answer2", // Mars
        selectedAnswer: "",
    },
    {
        question: "What is the largest mammal in the world?",
        answer1: "Elephant",
        answer2: "Blue Whale",
        answer3: "Giraffe",
        trueAnswer: "answer2", // Blue Whale
        selectedAnswer: "",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer1: "Oxygen",
        answer2: "Carbon Dioxide",
        answer3: "Nitrogen",
        trueAnswer: "answer2", // Carbon Dioxide
        selectedAnswer: "",
    },
    {
        question: "How many continents are there on Earth?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        trueAnswer: "answer3", // 7
        selectedAnswer: "",
    },
];

const Quiz = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [mark, setMark] = useState(0);
    let pass = false;

    useEffect(() => {
        if (currentQ === quizQuestions.length) {
            setMark(getMark());
        }
        setSubmit(false);
    }, [currentQ]);

    const getMark = () => {
        let count = 0;
        quizQuestions.forEach((question) => {
            if (question.selectedAnswer === question.trueAnswer) count = count + 1;
        });
        if (count >= quizQuestions.length / 2) pass = true;
        return count;
    };

    const checkAnswer = () => {
        return (
            <div className="auto">
                <button onClick={() => setCurrentQ((currentQ) => currentQ + 1)}>
                    Next
                </button>
                {quizQuestions[currentQ].selectedAnswer ===
                    quizQuestions[currentQ].trueAnswer ? (
                    <div className="alert alert-success" role="alert">
                        True Answer!!
                    </div>
                ) : (
                    <div className="alert alert-danger" role="alert">
                        Wrong Answer!!
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="quiz-container">
            {currentQ < quizQuestions.length ? (
                <div className="quiz-container">
                    <div className="header">
                        <h3>Quiz</h3>
                        <h3>Question {currentQ + 1}</h3>
                    </div>
                    <div className="question-container">
                        <Question data={quizQuestions[currentQ]} />
                        {submit === false && <button
                            onClick={() => {
                                setSubmit(true);
                            }}
                        >
                            Submit
                        </button>}
                        {submit && checkAnswer()}
                    </div>
                </div>
            ) : 
            pass ? (
                <h1> Your Mark : {mark}/{quizQuestions.length} </h1>
            ) : 
            (
                <h1> Your Mark not passed : {mark}/{quizQuestions.length}</h1>
            )}
        </div>
    );
};

export default Quiz;
