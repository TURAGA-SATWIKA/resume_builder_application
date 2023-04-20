import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Contact from './components/contact';
import Signin from './components/signin';
import ResumeCarousel from './components/coro';
import CreateResume from './components/create-resume';

function App() {
  return (
    <div className="App">
      


      <Routes>

          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/create-resume" element={<CreateResume />}/>
          <Route path="/signin" element={<Signin />}/>
      </Routes>
      
    </div>
  );
}

export default App;
