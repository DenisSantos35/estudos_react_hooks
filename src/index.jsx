import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page_404';
import { Footer } from './components/Footer';
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

/*
  Para criar uma rota cria se um BrowserRouter, adiciona um switch(riact v6 substituido por Routes)
  depois as rotas
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/abc/:slug?/:id?" element={<Abc></Abc>}></Route>
        <Route path="/abc/:slug/:id" Component={Abc}></Route>
        <Route path="/abc/:slug" Component={Abc}></Route>
        <Route path="/abc" Component={Abc}></Route>
        <Route path="/" Component={App} exact></Route>
        <Route path="*" Component={Page404}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
