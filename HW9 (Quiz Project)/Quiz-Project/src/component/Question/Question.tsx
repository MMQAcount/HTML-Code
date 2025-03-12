import { useState } from 'react';
import './Question.css';

interface IQuestion {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    trueAnswer: string, 
    selectedAnswer: string
}

const Question = ({data}: {data: IQuestion}) => {
    const [selected, setSelected] = useState('');
    data.selectedAnswer = selected;
    return (
        <div className="question-answer">
            <form>
                <h3>{data.question}</h3>
                <div className="answer">
                    <input type="radio" id="answer1" value="answer1" name="question" onChange={() => setSelected('answer1') }/>
                    <label htmlFor="answer1">{data.answer1}</label>
                </div>
                <div className="answer">
                    <input type="radio" id="answer2" value="answer2" name="question" onChange={() => setSelected('answer2')}/>
                    <label htmlFor="answer2">{data.answer2}</label>
                </div>
                <div className="answer">
                    <input type="radio" id="answer3" value="answer3" name="question" onChange={() => setSelected('answer3')}/>
                    <label htmlFor="answer3">{data.answer3}</label>
                </div>
            </form>
        </div>
    );
}

export default Question;



    
