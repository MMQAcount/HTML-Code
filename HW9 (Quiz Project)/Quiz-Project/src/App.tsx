import { useState } from 'react';
import './App.css'
import StartQuiz from './component/StartQuiz/StartQuiz';
import Quiz from './component/Quiz/Quiz';


function App() {
  const [currentPage, setCurrentPage] = useState('start-quiz');
  return (
    <>
      {currentPage === 'start-quiz' && <StartQuiz onStart={(page: string) => {setCurrentPage(page)}} />}
      {currentPage === 'quiz' && <Quiz />}
    </>
  )
}

export default App
