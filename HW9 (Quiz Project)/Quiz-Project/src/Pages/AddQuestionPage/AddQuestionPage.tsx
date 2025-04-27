// In the App Component, where you use the hook
import useAddQuestion from '../../hooks/useAddQuestion.hook';
import AddQuestion from '../AddQuestion/AddQuestion';

// Inside your AddQuestion route or component
const AddQuestionPage = () => {
  const { formRef, handleSubmit } = useAddQuestion();

  return <AddQuestion handleSubmit={handleSubmit} formRef={formRef} />;
};
export default AddQuestionPage;