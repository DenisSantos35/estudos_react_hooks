import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
//import { Home } from './templates/Home';
//import { CounterContextProvider } from './Context/CounterContext';
//import { HomeErrorBoundaris } from './estudos_hooks/Error_boundari';
//import { Home } from './estudos_hooks/fluxo_hooks';
//import UseDebugValue from './estudos_hooks/Use_debug_value';
//import UseImperactiveEffect from './estudos_hooks/Use_imperactive_effect';
//import UseLayoutEffect from './estudos_hooks/Use_layout_effect';
//import MySecondHooks from './estudos_hooks/MySecondHooks';
//import JoinOfHooks from './All_hooks/App/Join_of_hooks.jsx';
//import UseReduce from './Use_reduce';
//import UserContextReducer from './Use_context_reducer';
//import MyHook from './MyHook';
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
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/" exact Component={App}></Route>
        <Route path="/abc" exact Component={Abc}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
