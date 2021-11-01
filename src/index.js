import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/auth-context';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//   <AuthContextProvider>
//     <App />
//   </AuthContextProvider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

