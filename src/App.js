import React from 'react';
import './App.css';
import Boards from './components/Boards/Boards';
import ControlPanel from './components/ControlPanel/ControlPanel';

const App = (props) => {
  // const [boards, setBoards] = useState([
  //   {id: 1, title: 'Что нужно сделать', items: [{id:1, title: 'Задача №1'}, {id:2, title: 'Задача №2'}, {id:3, title: 'Задача №3'}]},
  //   {id: 2, title: 'Какие задачи в процессе', items: [{id:1, title: 'Задача №1'}, {id:2, title: 'Задача №2'}, {id:3, title: 'Задача №3'}]},
  //   {id: 3, title: 'Что сделано', items: [{id:1, title: 'Задача №1'}, {id:2, title: 'Задача №2'}, {id:3, title: 'Задача №3'}]}
  // ]);
  // const createBoards = props.state.boards.map(board => <Board key={board.id} id={board.id} title={board.title} task={board.task}
    // dragStartHandler = { props.dragStartHandler } 
    // dragLeaveHandler = { props.dragLeaveHandler } dragEndHandler = { props.dragEndHandler }
    // dragOverHandler = { props.dragOverHandler } dropHandler = { props.dropHandler }  
    // />);
  // const addDragDropFunction = createBoards.map(board => <Board
  //   dragStartHandler = { props.dragStartHandler } 
  //   dragLeaveHandler = { props.dragLeaveHandler } dragEndHandler = { props.dragEndHandler }
  //   dragOverHandler = { props.dragOverHandler } dropHandler = { props.dropHandler }  
  //   />);
  
  return (
    <div className="app">
      {/* <Board dataBoard = {props.state.boards} /> */}
      {/* {addDragDropFunction} */}
      {/* <ControlPanel dataBoard = { props.state.boards } /> */}
      <Boards 
      dataBoard = { props.state.boards } 
    // dragStartHandler = { props.dragStartHandler } 
    // dragLeaveHandler = { props.dragLeaveHandler } dragEndHandler = { props.dragEndHandler }
    // dragOverHandler = { props.dragOverHandler } dropHandler = { props.dropHandler } 
    />
       {/* {createBoards} */}
      {/* <div className="board">
        <div className="board__title">Что нужно сделать</div>
        <div className="item">Задача №1</div>
        <div className="item">Задача №2</div>
      </div>
      <div className="board">
        <div className="board__title">Какие задачи в процессе</div>
        <div className="item">Задача №1</div>
        <div className="item">Задача №2</div>
      </div>
      <div className="board">
        <div className="board__title">Что сделано</div>
        <div className="item">Задача №1</div>
        <div className="item">Задача №2</div>
      </div> */}
    </div>
  );
}

export default App;
