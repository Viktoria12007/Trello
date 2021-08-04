import React, { useState } from 'react';
import style from './Task.module.css';

const Task = (props) => {
    // const [boards, setBoards] = useState([
    //     {id: 1, title: 'Что нужно сделать', task: [{id:4, title: 'Задача №1'}, {id:5, title: 'Задача №2'}, {id:6, title: 'Задача №3'}]},
    //     {id: 2, title: 'Какие задачи в процессе', task: [{id:7, title: 'Задача №4'}, {id:8, title: 'Задача №5'}, {id:9, title: 'Задача №6'}]},
    //     {id: 3, title: 'Что сделано', task: [{id:10, title: 'Задача №7'}, {id:11, title: 'Задача №8'}, {id:12, title: 'Задача №9'}]}
    //   ]);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    function dragStartHandler(e, board, task) {
           setCurrentBoard(board);
           setCurrentTask(task);
        }
        function dragLeaveHandler(e) {
            e.target.style.boxShadow = 'none';
        }
        function dragEndHandler(e) {
            e.target.style.boxShadow = 'none';
        }
        function dragOverHandler(e) {
            e.preventDefault();
            if (e.target.className === style.task) {
                e.target.style.boxShadow = '0 4px 3px gray';
            }
        }
        function dropHandler(e, board, task) {
            e.preventDefault();
            const currentIndex = currentBoard.items.indexOf(currentTask);
            currentBoard.items.splice(currentIndex, 1);
            const dropIndex = board.items.indexOf(task);
            board.items.splice(dropIndex + 1, 0, currentTask);
            setBoards(boards.map(b => {
                if (b.id === board.id) {
                    return board;
                }
                if (b.id === currentBoard.id) {
                    return currentBoard;
                }
                return b;
            }))
            // setCurrentTask(task);
         }
    return(
        // <div className={style.task}
        // onDragStart={ props.dragStartHandler() }
        // onDragLeave={ props.dragLeaveHandler() }
        // onDragEnd={ props.dragEndHandler() }
        // onDragOver={ props.dragOverHandler() }
        // onDrop={ props.dropHandler() }
        // draggable={true} id={props.id}>
        //     {props.title}
        // </div>
        <div className={style.task}
        onDragStart={ (e) => dragStartHandler(e, board, task)}
        onDragLeave={ (e) => dragLeaveHandler(e)}
        onDragEnd={ (e) => dragEndHandler(e)}
        onDragOver={ (e) => dragOverHandler(e)}
        onDrop={ (e) => dropHandler(e, board, task)}
        draggable={true} id={props.id}>
        {props.title}
        </div>
    )
}

export default Task;