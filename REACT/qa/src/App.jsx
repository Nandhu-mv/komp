// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as BR ,Routes, Route} from 'react-router-dom'
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Nav from './Nav';

function App() {
  return (
    <>

    <BR>
    <Nav />
    
    <Routes>
      
      <Route path='/One' element= {<Q1 />} />
      <Route path='/Two' element= {<Q2 />} />
      <Route path='/' element= {<Q3 />} />
    </Routes>


    </BR>
    
    </>
  );
}

export default App;
