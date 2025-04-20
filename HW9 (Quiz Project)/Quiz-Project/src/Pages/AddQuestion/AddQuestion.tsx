import './AddQuestion.css'
const AddQuestion = () => {
    return (
        <form className="form-add-question">
            <h1>Add Question</h1>
            <label htmlFor="question">Question</label>
            <textarea name="question" id=""></textarea>
            <label htmlFor="answer1">Answer-1</label>
            <input type="text" name="answer1"/>
            <label htmlFor="answer2">Answer-2</label>
            <input type="text" name="answer2"/>
            <label htmlFor="anser3">Answer-3</label>
            <input type="text" name="answer3"/>
            <div>
                <h4>Correct Answer</h4>
                <div className="choices">
                    <label htmlFor="answer1">
                        <input type="radio" name="answer" id="answer1" value="answer1" />
                        Answer-1
                    </label>
                    <label htmlFor="answer2">
                        <input type="radio" name="answer" id="answer2" value="answer2" />
                        Answer-2
                    </label>
                    <label htmlFor="answer3">
                        <input type="radio" name="answer" id="answer3" value="answer3" />
                        Answer-3
                    </label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default AddQuestion;