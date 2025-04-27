import { createContext, useEffect, useState } from 'react';
import './App.css'
import StartQuiz from './component/StartQuiz/StartQuiz';
import Quiz from './component/Quiz/Quiz';
import LoginPage from './Pages/Login/LoginPage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import Result from './component/Result/Result';
import AddQuestionPage from './Pages/AddQuestionPage/AddQuestionPage';
import useAuth from './hooks/auth.hook';

type IQuiz = Array<{
  question: string,
  answer1: string,
  answer2: string,
  answer3: string,
  trueAnswer: string,
  selectedAnswer: string
}>;

interface IQuizContext {
  quiz: IQuiz;
  setQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
}

export const QuizContext = createContext<IQuizContext>({
  quiz: [],
  setQuiz: () => { }
});

function App() {
  const [quiz, setQuiz] = useState<IQuiz>([]);
  // const {user} = useAuth();
  useEffect(() => {
    setQuiz([
      {
        question: "What is the capital of France?",
        answer1: "Berlin",
        answer2: "Madrid",
        answer3: "Paris",
        trueAnswer: "answer3", // Paris
        selectedAnswer: "",
      },
      {
        question: "Which planet is known as the Red Planet?",
        answer1: "Earth",
        answer2: "Mars",
        answer3: "Jupiter",
        trueAnswer: "answer2", // Mars
        selectedAnswer: "",
      },
      {
        question: "What is the largest mammal in the world?",
        answer1: "Elephant",
        answer2: "Blue Whale",
        answer3: "Giraffe",
        trueAnswer: "answer2", // Blue Whale
        selectedAnswer: "",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        answer1: "Oxygen",
        answer2: "Carbon Dioxide",
        answer3: "Nitrogen",
        trueAnswer: "answer2", // Carbon Dioxide
        selectedAnswer: "",
      },
      {
        question: "How many continents are there on Earth?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        trueAnswer: "answer3", // 7
        selectedAnswer: "",
      },
      {
        question: "What is the boiling point of water at sea level?",
        answer1: "90°C",
        answer2: "100°C",
        answer3: "110°C",
        trueAnswer: "answer2", // 100°C
        selectedAnswer: "",
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        answer1: "Oxygen",
        answer2: "Osmium",
        answer3: "Oganesson",
        trueAnswer: "answer1", // Oxygen
        selectedAnswer: "",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answer1: "Charles Dickens",
        answer2: "William Shakespeare",
        answer3: "Mark Twain",
        trueAnswer: "answer2", // William Shakespeare
        selectedAnswer: "",
      },
      {
        question: "Which ocean is the largest?",
        answer1: "Atlantic Ocean",
        answer2: "Indian Ocean",
        answer3: "Pacific Ocean",
        trueAnswer: "answer3", // Pacific Ocean
        selectedAnswer: "",
      },
      {
        question: "How many legs does a spider have?",
        answer1: "6",
        answer2: "8",
        answer3: "10",
        trueAnswer: "answer2", // 8
        selectedAnswer: "",
      }
    ]);
  }, []);
  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      <div className="home-page">
        <BrowserRouter>
          <nav className="navBar">
            <h3>Quiz App</h3>

          </nav>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/start-quiz" element={<StartQuiz />} />
            <Route path="/quiz/:questionIndex" element={<Quiz />} /> {/* Add dynamic route */}
            <Route path="/add-question" element={<AddQuestionPage />} />
            <Route path="/result/:mark/:numberOfQuestion" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QuizContext.Provider>
  )
}

export default App
