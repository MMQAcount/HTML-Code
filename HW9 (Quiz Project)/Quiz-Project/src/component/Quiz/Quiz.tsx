import { useEffect, useReducer, useState } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import Result from "../Result/Result";
import { IQuestion } from "../../@types";
import reducer from "../../reducer.ts/reducer.ts";
import { useNavigate } from "react-router";


// const initialState: IQuestion = {question:"", answer1:"", answer2:"", answer3: "", selectedAnswer:"", trueAnswer: ""};

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
    {
        question: "What is the boiling point of water at sea level?",
        answer1: "90°C",
        answer2: "100°C",
        answer3: "110°C",
        trueAnswer: "answer2", // 100°C
        selectedAnswer: "",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer1: "Oxygen",
        answer2: "Osmium",
        answer3: "Oganesson",
        trueAnswer: "answer1", // Oxygen
        selectedAnswer: "",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer1: "Charles Dickens",
        answer2: "William Shakespeare",
        answer3: "Mark Twain",
        trueAnswer: "answer2", // William Shakespeare
        selectedAnswer: "",
    },
    {
        question: "Which ocean is the largest?",
        answer1: "Atlantic Ocean",
        answer2: "Indian Ocean",
        answer3: "Pacific Ocean",
        trueAnswer: "answer3", // Pacific Ocean
        selectedAnswer: "",
    },
    {
        question: "How many legs does a spider have?",
        answer1: "6",
        answer2: "8",
        answer3: "10",
        trueAnswer: "answer2", // 8
        selectedAnswer: "",
    }
];


const Quiz = () => {    
    // const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [mark, setMark] = useState(0);
    const [nextQ, setNextQ] = useState(false);
    const [disableAnswer, setDisableAnswer] = useState(true);
    const answer = currentQ < quizQuestions.length && quizQuestions[currentQ].selectedAnswer === quizQuestions[currentQ].trueAnswer;
    useEffect(() => {
        if (currentQ === quizQuestions.length) {
            setMark(getMark());
        }
        setSubmit(false);
        setNextQ(false);

        console.log(`Question ${currentQ + 1}`);
    }, [currentQ]);

    useEffect(() => {
        if (submit) {
            if (answer) {
                console.log("true answer");
            } else {
                console.log("wrong answer");
            }
        }
       
        setDisableAnswer(!disableAnswer);
    }, [submit]);


    const handleNextQuestion = () => {
        setCurrentQ(prev => prev + 1);
        setSubmit(false);
        setNextQ(true);
    };


    const getMark = () => {
        let count = 0;
        quizQuestions.forEach((question) => {
            if (question.selectedAnswer === question.trueAnswer) count = count + 1;
        });
        return count;
    };

    return (
        <div className="context">
            <div className="quiz-container">
                    {currentQ < quizQuestions.length - 1 ?
                    <div className="quiz-container">
                    <div className="header">
                        <h3>Question {currentQ + 1}</h3>
                    </div>
                    <div className="question-container animations">
                        <Question data={quizQuestions[currentQ]} next={nextQ} disAnswer={disableAnswer}/>
                        {submit === false && <button
                            onClick={() => {
                                setSubmit(true);
                            }}
                        >
                            Submit
                        </button>}
                        {
                            submit && <div className="auto">
                                <button onClick={handleNextQuestion}>
                                    Next
                                </button>
                            </div>
                        }
                    </div>
                    {submit && <div className={answer ? "alert alert-success" :  "alert alert-danger"} role="alert">
                                    {answer ? <h3>True Answer!!</h3> : <h3>Wrong Answer!!</h3>}
                    </div>}
                </div> 
                : <div className="quiz-container">
                <div className="header">
                    <h3>Question {currentQ + 1}</h3>
                </div>
                <div className="question-container animations">
                    <Question data={quizQuestions[currentQ]} next={nextQ} disAnswer={disableAnswer}/>
                    {submit === false && <button
                        onClick={() => {
                            setSubmit(true);
                        }}
                    >
                        Submit
                    </button>}
                    {
                        submit && <div className="auto">
                            <button onClick={()=>navigate('/result')}>
                                Finish
                            </button>
                        </div>
                    }
                </div>
                {submit && <div className={answer ? "alert alert-success" :  "alert alert-danger"} role="alert">
                                {answer ? <h3>True Answer!!</h3> : <h3>Wrong Answer!!</h3>}
                </div>}
            </div>}
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="circles2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
