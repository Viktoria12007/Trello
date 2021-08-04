import React from 'react';
import './App.css';
import Boards from './components/Boards/Boards';

const App = (props) => {
  return (
    <div className="app">
      <Boards dataBoard = { props.state.boards } />
    </div>
  );
}

export default App;
