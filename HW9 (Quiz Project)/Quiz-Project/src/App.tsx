import { useState } from 'react';
import './App.css'
import StartQuiz from './component/StartQuiz/StartQuiz';
import Quiz from './component/Quiz/Quiz';
import LoginPage from './Pages/Login/LoginPage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import AddQuestion from './Pages/AddQuestion/AddQuestion';
import Result from './component/Result/Result';


function App() {
  const [currentPage, setCurrentPage] = useState('start-quiz');
  return (
   <div className="home-page">
     <BrowserRouter>
      <nav className="navBar">
        <h3>Quiz App</h3>
        <NavLink to={'/add-question'} className="add-nav">Add Question</NavLink>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/start-quiz" element={<StartQuiz/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/add-question" element={<AddQuestion/>}/>
        <Route path="/result" element={<Result mark={10} numberOfQuestion={5} />
}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
