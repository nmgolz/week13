import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import FormHome from './components/FormHome';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div>
      <NavBar />
      </div>
     <div>
      <FormHome />
     </div>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

