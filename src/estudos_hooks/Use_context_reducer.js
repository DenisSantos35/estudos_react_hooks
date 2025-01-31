import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

//actions.jsx
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};
//data.jsx
//eslint-disable-next-line
export const globalState = {
  title: 'Titulo do contexto',
  body: 'Body do contexto',
  context: 0,
};

//App context
//eslint-disable-next-line
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//reducer.js
//eslint-disable-next-line
export const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Digite um texto"></input>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
    </>
  );
};

//App.jsx
function UserContextReducer() {
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default UserContextReducer;
