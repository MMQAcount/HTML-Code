import { NavLink } from 'react-router';
import './StartQuiz.css';

const StartQuiz = () => {
    console.log("Start Quiz");
    
    return (
        <div className="context">
            <div className="container">
                <h1>Start Quiz</h1>
                <NavLink className="button" to={'/quiz'}>
                    Start Quiz 
                </NavLink>
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
    )
}

export default StartQuiz;