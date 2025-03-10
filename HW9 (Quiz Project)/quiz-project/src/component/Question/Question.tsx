import { useState } from 'react';
import './Question.css';

interface IQuestion {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    trueAnswer: string
}

const Question = ({data}: {data: IQuestion}) => {
    const [selected, setSelected] = useState('');
    return (
        <div className="question-answer">
            <h3>{data.question}</h3>
            <div className="answer">
                <input type="radio" id="answer1" value="answer1" name="question" onChange={() => setSelected('answer1')}/>
                <label for="answer1">{data.answer1}</label>
            </div>
            <div className="answer">
                <input type="radio" id="answer2" value="answer2" name="question" onChange={() => setSelected('answer2')}/>
                <label for="answer2">{data.answer2}</label>
            </div>
            <div className="answer">
                <input type="radio" id="answer3" value="answer3" name="question" onChange={() => setSelected('answer3')}/>
                <label for="answer3">{data.answer3}</label>
            </div>
            {selected === data.trueAnswer && <h1>True</h1>}
        </div>
    );
}

export default Question;



    
