// import logo from './logo.svg';
import {BrowserRouter as BR, Route, Routes} from 'react-router-dom'

import './App.css';

function App() {
  
  return (
    <>
      <BR>
      
        <Routes>
          <Route path='/' element='Two' />
          {/* <Route path='/etail' element='Detail' /> */}
          

        </Routes>
      
      </BR>
        

    </>
  );
}

export default App;
