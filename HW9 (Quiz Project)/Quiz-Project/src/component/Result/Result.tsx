import { useEffect } from 'react';
import './Result.css';
import { NavLink } from 'react-router';

interface IProps {
    mark: number;
    numberOfQuestion: number;
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
                    {isPassed ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                    </svg>}
                    <div className="score-display">
                        <h1><span className="score-value">{props.mark}</span>/<span className="score-total">{props.numberOfQuestion}</span></h1>
                    </div>
                    {isPassed ?           
                        <h1 className="pass">You Passed The Quiz</h1>
                        :
                        <h1 className="fail">You Failed In The Quiz</h1>
                    }
                    
                    <NavLink to={{pathname: "/start-quiz"}} className="result-button">Try Again</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Result;