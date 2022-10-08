
import './App.css';
import Home from './components/Home';
import WeekReport from './components/WeeklyReport';
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/weeklyreport" element={ <WeekReport/> } />
      </Routes>
    </div>
  )
}

export default App;
