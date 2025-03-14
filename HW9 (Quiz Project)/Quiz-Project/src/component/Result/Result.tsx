import { useEffect } from 'react';
import './Result.css';

interface IProps {
    mark: number;
    numberOfQuestion: number;
    tryAgain: (page: string) => void;
}

const Result = (props: IProps) => {
    const isPassed = props.mark >= props.numberOfQuestion / 2;
    
    useEffect(() => {
        if (isPassed) 
            console.log("you passed");
        else
            console.log("you failed");
    }, [isPassed])
    
    return (
        <div className="result-container">
            <div className="result-card">
                <div className="result-card-content">
                    <div className="score-display">
                        <h1><span className="score-value">{props.mark}</span>/<span className="score-total">{props.numberOfQuestion}</span></h1>
                    </div>
                    
                    {isPassed ?           
                        <h1 className="pass">You Passed The Quiz</h1>
                        :
                        <h1 className="fail">You Failed In The Quiz</h1>
                    }
                    
                    <button className="result-button" onClick={() => props.tryAgain('start-quiz')}>
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Result;