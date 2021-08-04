import React from 'react';
import style from './Board.module.css';
import Task from '../../Task/Task';

const Board = (props) => {

    const createTask = props.task.map(task => <Task key={task.id} id={task.id} title={task.title}  
        // dragStartHandler = { props.dragStartHandler } 
        // dragLeaveHandler = { props.dragLeaveHandler } dragEndHandler = { props.dragEndHandler }
        // dragOverHandler = { props.dragOverHandler } dropHandler = { props.dropHandler } 
        />);
        // const addDragDropFunction = createTask.map(task => <Task
        //     dragStartHandler = { props.dragStartHandler } 
        //     dragLeaveHandler = { props.dragLeaveHandler } dragEndHandler = { props.dragEndHandler }
        //     dragOverHandler = { props.dragOverHandler } dropHandler = { props.dropHandler }  
        //     />);
    return(
        <div id={props.id} className={style.board}>
            <h2>{props.title}</h2>
            {createTask}
        </div>
    )
}

export default Board;