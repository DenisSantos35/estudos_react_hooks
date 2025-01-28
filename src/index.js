import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseReduce from './Use_reduce';
//import UseContext2 from './Use_context2';
//import UseContext from './Use_context';
//import UseRef from './Use_ref';
//import App from './App';
//import UseEfect from './Use_efect';
//import UseCalback from './Use_calback';
//import UseMemo from './Use_memo';
//import UseMemo2 from './Use_memo2';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseReduce />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
