// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './New';
import New1 from './New1';
import New2 from './New2';
import New3 from './New3';


function App() {
  return (
    
    <Router >
      
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/First' element={<New1 />} />
        <Route path='/Second' element={<New2 />} />
        <Route path='/Third' element={<New3 />} />
      </Routes >
    </Router >
  );
}

export default App;
