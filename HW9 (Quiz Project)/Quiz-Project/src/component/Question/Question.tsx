import { useEffect, useState } from 'react';
import './Question.css';

interface IQuestion {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    trueAnswer: string, 
    selectedAnswer: string
}

const Question = ({data, next, disAnswer}: {data: IQuestion, next: boolean, disAnswer:boolean}) => {
    const [selected, setSelected] = useState('');
    data.selectedAnswer = selected;
    
    useEffect(() => {
        if (next) setSelected('');
    }, [next]);
    useEffect(() => {
      if(selected) 
        console.log(`${selected} is selected`);
    }, [selected])
    
    return (
        <div className="question-answer">
            <form>
                <h3>{data.question}</h3>
                <div className="answer">
                    <input type="radio" id="answer1" value="answer1" name="question" onChange={() => setSelected('answer1')} checked={selected === 'answer1'} disabled={disAnswer}/>
                    <label htmlFor="answer1">{data.answer1}</label>
                </div>
                <div className="answer">
                    <input type="radio" id="answer2" value="answer2" name="question" onChange={() => setSelected('answer2')} checked={selected === 'answer2'} disabled={disAnswer}/>
                    <label htmlFor="answer2">{data.answer2}</label>
                </div>
                <div className="answer">
                    <input type="radio" id="answer3" value="answer3" name="question" onChange={() => setSelected('answer3')} checked={selected === 'answer3'} disabled={disAnswer}/>
                    <label htmlFor="answer3">{data.answer3}</label>
                </div>
            </form>
        </div>
    );
}

export default Question;



    
