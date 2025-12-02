import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import All from './All';
// import Multiform from './Multiform';
// import Fetch from './Fetch';
// import Fetchaxi from './Fetchaxios';
// import BasicExample from './New4';
import New5 from './New5';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <All /> */}

    {/* <Multiform /> */}
    {/* <Fetch />
    <Fetchaxi /> */}
    {/* <BasicExample /> */}
    <New5 />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
