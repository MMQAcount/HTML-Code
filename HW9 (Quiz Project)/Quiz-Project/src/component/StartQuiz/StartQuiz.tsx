import { NavLink } from 'react-router';
import './StartQuiz.css';
import useAuth from '../../hooks/auth.hook';

const StartQuiz = () => {
    console.log("Start Quiz");
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="context">
            <div className="container">
                <h1>Start Quiz</h1>
                <NavLink className="button" to={'/quiz/0'}>
                    Start Quiz
                </NavLink>
                {user.role === 'admin' && (
                    <NavLink className="button-add" to={'/add-question'}>
                        Add Question
                    </NavLink>
                )}
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