import { useContext, useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../Question/Question";
import { useNavigate, useParams } from "react-router";
import { QuizContext } from "../../App";


const Quiz = () => {

    const { quiz } = useContext(QuizContext);
    const { questionIndex } = useParams();
    const index = parseInt(questionIndex || '0');
    const [submit, setSubmit] = useState(false);
    const [mark, setMark] = useState(0);
    const [nextQ, setNextQ] = useState(false);
    const [disableAnswer, setDisableAnswer] = useState(true);
    const answer = index < quiz.length && quiz[index].selectedAnswer === quiz[index].trueAnswer;
    const navigate = useNavigate();
    useEffect(() => {

        setSubmit(false);
        setNextQ(false);

        console.log(`Question ${index + 1}`);
    }, [index]);

    useEffect(() => {
        if (submit) {
            if (answer) {
                console.log("true answer");
                setMark((mark) => mark+1);                
            } else {
                console.log("wrong answer");
            }
        }

        setDisableAnswer(!disableAnswer);
    }, [submit]);



    const handleNextQuestion = () => {
        if (index < quiz.length - 1) {
            navigate(`/quiz/${index + 1}`);
        }
        setSubmit(false);
        setNextQ(true);
    };


    return (
        <div className="context">
            <div className="quiz-container">
                {index < quiz.length - 1 ?
                    <div className="quiz-container">
                        <div className="header">
                            <h3>Question {index + 1}</h3>
                        </div>
                        <div className="question-container animations">
                            <Question data={quiz[index]} next={nextQ} disAnswer={disableAnswer} />
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
                        {submit && <div className={answer ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {answer ? <h3>True Answer!!</h3> : <h3>Wrong Answer!!</h3>}
                        </div>}
                    </div>
                    : <div className="quiz-container">
                        <div className="header">
                            <h3>Question {index + 1}</h3>
                        </div>
                        <div className="question-container animations">
                            <Question data={quiz[index]} next={nextQ} disAnswer={disableAnswer} />
                            {submit === false && <button
                                onClick={() => {
                                    setSubmit(true);
                                }}
                            >
                                Submit
                            </button>}
                            {
                                submit && <div className="auto">
                                    <button onClick={() => {
                                        navigate(`/result/${mark}/${quiz.length}`)
                                    }}>
                                        Finish
                                    </button>
                                </div>
                            }
                        </div>
                        {submit && <div className={answer ? "alert alert-success" : "alert alert-danger"} role="alert">
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
