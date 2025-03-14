import './StartQuiz.css';

interface IProps {
    onStart: (page:string)=>void;
}

const StartQuiz = (props: IProps) => {
    console.log("Start Quiz");
    
    return (
        <div className="context">
            <div className="container">
                <h1>Start Quiz</h1>
                <button className="button" id="button" onClick={() => {props.onStart("quiz")}}>
                    Start Quiz
                </button>

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