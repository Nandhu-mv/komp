// import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as BR,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    
    <BR>

        <Routes>
            <Route  path='/' element={<Home />}   />

        </Routes>
    
    </BR>
      
    </>
  );
}

export default App;
