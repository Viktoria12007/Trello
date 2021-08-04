import React, { useState } from 'react';
import './ControlPanel.css';
import './../Boards/Boards.css';
// import { boards, setBoards, 
    // currentBoard, setCurrentBoard, currentTask, setCurrentTask  
// } 
//     from './../Boards/Boards';
import { saveBoard, 
    // saveTask, cancel, 
    checkEmpty } 
    from './../../redux/state';

const ControlPanel = (props) => {
    let [boards, setBoards] = useState(
        props.dataBoard

        // {id: 1, title: 'Что нужно сделать', 
        // tasks: [{id:4, title: 'Задача №1', text: 'Что-то там №1'}, 
        // {id:5, title: 'Задача №2', text: 'Что-то там №2'}, 
        // {id:6, title: 'Задача №3', text: 'Что-то там №3'}],
        // },
        // {id: 2, title: 'Какие задачи в процессе', 
        // tasks: [{id:7, title: 'Задача №4', text: 'Что-то там №4'}, 
        // {id:8, title: 'Задача №5', text: 'Что-то там №5'}, 
        // {id:9, title: 'Задача №6', text: 'Что-то там №6'}],
        // },
        // {id: 3, title: 'Что сделано', 
        // tasks: [{id:10, title: 'Задача №7', text: 'Что-то там №7'}, 
        // {id:11, title: 'Задача №8', text: 'Что-то там №8'}, 
        // {id:12, title: 'Задача №9', text: 'Что-то там №9'}],
        // }


      );

    // const [currentBoard, setCurrentBoard] = useState(null);
    // const [currentTask, setCurrentTask] = useState(null);
    return(
        <div>
        <h1 className='title mainTitle'>Ваши доски</h1>
        <form className='changeForm mainForm'>
            <label className='changeLabel'>
                <div className='changeInputError'></div>
            <input className='changeInput mainChangeInput' onInput={ (e) => checkEmpty(e)} placeholder='Введите название доски'></input>
            </label>
            {/* <label className='changeLabel'>
                <div className='changeTextareaError'></div>
                <textarea className='changeTextarea' onInput={ (e) => checkEmpty(e)} placeholder='Введите описание задачи'></textarea>
            </label> */}
            {/* <button className='button saveButton' 
            onClick={ (e) => saveTask(e,  */}
             {/* board,  */}
            {/* boards, setBoards)}>Сохранить</button>
            <button className='button cancelButton' 
            onClick={ (e) => cancel(e)}>Отмена</button> */}
             <button className='button'  onClick={ (e) => saveBoard(e, 
                 
                boards, setBoards)}>Добавить доску</button>
        </form>
        </div>
    )
}

export default ControlPanel;