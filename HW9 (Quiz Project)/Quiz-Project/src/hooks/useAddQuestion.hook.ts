import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { IQuestion } from "../@types"; // Ensure this type is correctly defined
import { QuizContext } from "../App";
import { useNavigate } from "react-router";

const useAddQuestion = () => {
  const { quiz, setQuiz } = useContext(QuizContext);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: IQuestion = {
      question: (e.target as HTMLFormElement).qQuestion.value,
      answer1: (e.target as HTMLFormElement).qAnswer1.value,
      answer2: (e.target as HTMLFormElement).qAnswer2.value,
      answer3: (e.target as HTMLFormElement).qAnswer3.value,
      trueAnswer: (e.target as HTMLFormElement).answer.value,
      selectedAnswer: "",
    };
    setQuiz((prevQuiz) => [...prevQuiz, formData]);
    if (formRef.current) {
      toast.success("Question Added Successfully");
      navigate("/start-quiz");
    }
  };

  return {
    formRef,
    handleSubmit,
  };
};

export default useAddQuestion;
