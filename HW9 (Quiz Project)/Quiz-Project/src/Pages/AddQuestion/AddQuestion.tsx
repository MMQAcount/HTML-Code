import './AddQuestion.css';

interface IProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formRef: React.RefObject<HTMLFormElement | null>;
}

const AddQuestion = (props: IProps) => {
    const { handleSubmit, formRef } = props;

    return (
        <form className="question" onSubmit={handleSubmit} ref={formRef}> {/* formRef is correctly passed here */}
            <h1>Add Question</h1>
            <label htmlFor="question">Question</label>
            <textarea id="qQuestion" name="qQuestion" required></textarea>
            <label htmlFor="answer1">Answer-1</label>
            <input id="qAnswer1" name="qAnswer1" type="text" required />
            <label htmlFor="answer2">Answer-2</label>
            <input id="qAnswer2" name="qAnswer2" type="text" required />
            <label htmlFor="answer3">Answer-3</label>
            <input id="qAnswer3" name="qAnswer3" type="text" required />
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
};

export default AddQuestion;
