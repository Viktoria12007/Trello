import React, { useState } from 'react';
import './Boards.css';
import { dragStartHandler, dragLeaveHandler, dragEndHandler, 
    dragOverHandler, dropHandler, dropTaskHandler, editTask, saveChange, 
    deleteTask, addTask, saveBoard, saveTask, cancel, checkEmpty } 
    from './../../redux/state';
import ControlPanel from '../ControlPanel/ControlPanel';

const Boards = (props) => {
//    console.log(props.dataBoard);
    const [boards, setBoards] = useState(
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

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    // function dragStartHandler(e, board, task) {
    //        setCurrentBoard(board);
    //        setCurrentTask(task);
    // }
    // function dragLeaveHandler(e) {
    //     e.target.style.boxShadow = 'none';
    // }
    // function dragEndHandler(e) {
    //     e.target.style.boxShadow = 'none';
    // }
    // function dragOverHandler(e) {
    //     e.preventDefault();
    //     if (e.target.className === 'task') {
    //         e.target.style.boxShadow = '0 4px 3px gray';
    //     }
    // }
    // function dropHandler(e, board, task) {
    //     e.preventDefault();
    //     e.stopPropagation(); 
    //     const currentIndex = currentBoard.tasks.indexOf(currentTask);
    //     currentBoard.tasks.splice(currentIndex, 1);
    //     const dropIndex = board.tasks.indexOf(task);
    //     board.tasks.splice(dropIndex + 1, 0, currentTask);
    //     setBoards(boards.map(b => {
    //         if (b.id === board.id) {
    //             return board;
    //         }
    //         if (b.id === currentBoard.id) {
    //             return currentBoard;
    //         }
    //         return b;
    //     }))
    //     e.target.style.boxShadow = 'none';
    //  }

    //  function dropTaskHandler(e, board) {
    //    board.tasks.push(currentTask);
    //    const currentIndex = currentBoard.tasks.indexOf(currentTask);
    //    currentBoard.tasks.splice(currentIndex, 1);
    //    setBoards(boards.map(b => {
    //     if (b.id === board.id) {
    //         return board;
    //     }
    //     if (b.id === currentBoard.id) {
    //         return currentBoard;
    //     }
    //     return b;
    //    }))
    //    e.target.style.boxShadow = 'none';
    //  }
     
    //  function editTask(e) {
    //     e.target.style.display='none';
    //     const textTask = e.target.previousSibling;
    //     const titleTask = textTask.previousSibling;
    //     const changeForm = e.target.nextSibling;
    //     const changeInputError = changeForm.querySelector('.changeInputError');
    //     const changeTextareaError = changeForm.querySelector('.changeTextareaError');
    //     const changeInput = changeForm.querySelector('.changeInput');
    //     const changeTextarea = changeForm.querySelector('.changeTextarea');
    //     changeInput.value = titleTask.textContent;
    //     changeTextarea.value = textTask.textContent;
    //     textTask.style.display = 'none';
    //     titleTask.style.display = 'none';
    //     changeInputError.textContent = '';
    //     changeTextareaError.textContent = '';
    //     changeForm.style.display = 'flex';
    //    }

    //  function saveChange(e, task, board) {
    //         e.preventDefault();
    //         const changeForm = e.target.closest('.changeForm');
    //         const addEditButton = changeForm.previousSibling;
    //         const textTask = addEditButton.previousSibling;
    //         const titleTask = textTask.previousSibling;
    //         const changeInput = changeForm.querySelector('.changeInput');
    //         const changeTextarea = changeForm.querySelector('.changeTextarea');
    //         const changeInputError = changeInput.previousSibling;
    //         const changeTextareaError = changeTextarea.previousSibling;

    //         if (changeInput.value.trim() !== '' && changeTextarea.value.trim() !== '') {
    //         const currentIndex = board.tasks.indexOf(task);
    //         board.tasks[currentIndex].title = changeInput.value;
    //         board.tasks[currentIndex].text = changeTextarea.value;
    //         setBoards(boards.map(b => {
    //             if (b.id === board.id) {
    //                 return board;
    //             }
    //             return b;
    //         }))
    //         textTask.style.display = 'block';
    //         titleTask.style.display = 'block';
    //         changeInput.value = '';
    //         changeTextarea.value = '';
    //         changeInputError.textContent = '';
    //         changeTextareaError.textContent = '';
    //         console.log(changeInput.value);
    //         changeForm.style.display = 'none';
    //         addEditButton.style.display = 'inline-block';
    //     }
    //     if (changeInput.value.trim() === '') {
    //         changeInputError.textContent = 'Не указано название задачи!';
    //     }
    //     if (changeTextarea.value.trim() === '') {
    //         changeTextareaError.textContent = 'Не указано описание задачи!';
    //     }
    //      }

    //  function deleteTask(e, task, board) {
    //     const currentIndex = board.tasks.indexOf(task);
    //     board.tasks.splice(currentIndex, 1);
    //     setBoards(boards.map(b => {
    //         if (b.id === board.id) {
    //             return board;
    //         }
    //         return b;
    //     }))
    //  }

    //  function addTask(e) {
    //   e.target.style.display='none';
    //   const changeForm = e.target.nextSibling;
    //   console.log(changeForm.className);
    //   const changeInput = changeForm.querySelector('.changeInputError');
    //   const changeTextarea = changeForm.querySelector('.changeTextareaError');
    //   changeInput.textContent = '';
    //   changeTextarea.textContent = '';
    //   changeForm.style.display = 'flex';
    //  }

    //  function saveTask(e, board) {
    //     e.preventDefault();
    //     const changeForm = e.target.closest('.changeForm');
    //     const addTaskButton = changeForm.previousSibling;
    //     const changeInput = changeForm.querySelector('.changeInput');
    //     const changeTextarea = changeForm.querySelector('.changeTextarea');
    //     const changeInputError = changeInput.previousSibling;
    //     const changeTextareaError = changeTextarea.previousSibling;
    
    //     if (changeInput.value.trim() !== '' && changeTextarea.value.trim() !== '') {
    //     const newTask = {};
    //     newTask.title = changeInput.value;
    //     newTask.text = changeTextarea.value;
    //     board.tasks.push(newTask);
    //     setBoards(boards.map(b => {
    //         if (b.id === board.id) {
    //             return board;
    //         }
    //         return b;
    //     }))
    //     changeInput.value = '';
    //     changeTextarea.value = '';
    //     changeInputError.textContent = '';
    //     changeTextareaError.textContent = '';
    //     console.log(changeInput.value);
    //     changeForm.style.display = 'none';
    //     addTaskButton.style.display = 'block';
    // }
    // if (changeInput.value.trim() === '') {
    //     changeInputError.textContent = 'Не указано название задачи!';
    // }
    // if (changeTextarea.value.trim() === '') {
    //     changeTextareaError.textContent = 'Не указано описание задачи!';
    // }
    // }

    // function cancel(e) {
    //     e.preventDefault();
    //     const changeForm = e.target.closest('.changeForm');
    //     const addEditButton = changeForm.previousSibling;
    //     const textTask = addEditButton.previousSibling;
    //     const titleTask = textTask.previousSibling;
    //     const changeInput = changeForm.querySelector('.changeInput');
    //     const changeTextarea = changeForm.querySelector('.changeTextarea');
    //     const changeInputError = changeInput.previousSibling;
    //     const changeTextareaError = changeTextarea.previousSibling;
    //     changeInput.value = '';
    //     changeTextarea.value = '';
    //     changeInputError.textContent = '';
    //     changeTextareaError.textContent = '';
    //     changeForm.style.display = 'none';
    //     textTask.style.display = 'block';
    //     titleTask.style.display = 'block';
    //     addEditButton.style.display = 'inline-block';
    // }

    // function checkEmpty(e) {
    //     if (e.target.value !== '') {
    //       e.target.previousSibling.textContent = '';
    //     }
    //     if (e.target.value === '' && e.target.className === 'changeInput') {
    //            e.target.previousSibling.textContent = 'Не указано название задачи!';
    //     }
    //     if (e.target.value === '' && e.target.className === 'changeTextarea') {
    //        e.target.previousSibling.textContent = 'Не указано описание задачи!';
    //     }
    // }

    return(
        <div>
            {/* <ControlPanel dataBoard = {props.dataBoard} /> */}
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


             <button className='button'  onClick={ (e) => saveTask(e,  
                null, 
                boards, setBoards)}>Добавить доску</button>
        </form>


        <div className='boards'>
            {boards.map(board => 
            <div key={board.id} id={board.id} className='board'
            onDragOver={ (e) => dragOverHandler(e)}
            onDrop={ (e) => dropTaskHandler(e, board, currentBoard, currentTask, boards, setBoards)}>
                
                <h2 className='title'>{board.title}</h2>
                <button className='button' onClick={ (e) => editTask(e, false)}>Редактировать</button>
                    <form className='changeForm'>
                    <label className='changeLabel'>
                        <div className='changeInputError'></div>
                    <input className='changeInput mainChangeInput' onInput={ (e) => checkEmpty(e)} placeholder='Введите название доски'></input>
                    </label>
                    {/* <label className='changeLabel'>
                        <div className='changeTextareaError'></div>
                        <textarea className='changeTextarea' onInput={ (e) => checkEmpty(e)} placeholder='Введите описание задачи'></textarea>
                    </label> */}
                    <button className='button saveButton' 
                    onClick={ (e) => saveChange(e, null, board, boards, setBoards)}>Сохранить</button>
                    <button className='button cancelButton' 
                    onClick={ (e) => cancel(e, false)}>Отмена</button>
                </form>
                    <button className='button' onClick={ (e) => deleteTask(e, null, board, boards, setBoards)}>Удалить</button>
                {board.tasks.map(task =>
                <div key={task.id} id={task.id} className='task'
                onDragStart={ (e) => dragStartHandler(e, board, task, setCurrentBoard, setCurrentTask)}
                onDragLeave={ (e) => dragLeaveHandler(e)}
                onDragEnd={ (e) => dragEndHandler(e)}
                onDragOver={ (e) => dragOverHandler(e)}
                onDrop={ (e) => dropHandler(e, board, task, currentBoard, currentTask, boards, setBoards)}
                draggable={true}>
                    <h3 className='subtitle'>{task.title}</h3>
                    <p className='text'>{task.text}</p>
                    <button className='button' onClick={ (e) => editTask(e,
                        true 
                        // task, board
                        )}>Редактировать</button>
                    <form className='changeForm'>
                    <label className='changeLabel'>
                        <div className='changeInputError'></div>
                    <input className='changeInput' onInput={ (e) => checkEmpty(e)} placeholder='Введите название задачи'></input>
                    </label>
                    <label className='changeLabel'>
                        <div className='changeTextareaError'></div>
                        <textarea className='changeTextarea' onInput={ (e) => checkEmpty(e)} placeholder='Введите описание задачи'></textarea>
                    </label>
                    <button className='button saveButton' 
                    onClick={ (e) => saveChange(e, task, board, boards, setBoards)}>Сохранить</button>
                    <button className='button cancelButton' 
                    onClick={ (e) => cancel(e, true)}>Отмена</button>
                </form>
                    <button className='button' onClick={ (e) => deleteTask(e, task, board, boards, setBoards)}>Удалить</button>
                
                </div>
                )}
                <button className='button' onClick={ (e) => addTask(e, board)}>Добавить задачу</button>
                <form className='changeForm'>
                    <label className='changeLabel'>
                        <div className='changeInputError'></div>
                    <input className='changeInput' onInput={ (e) => checkEmpty(e)} placeholder='Введите название задачи'></input>
                    </label>
                    <label className='changeLabel'>
                        <div className='changeTextareaError'></div>
                        <textarea className='changeTextarea' onInput={ (e) => checkEmpty(e)} placeholder='Введите описание задачи'></textarea>
                    </label>
                    <button className='button saveButton' 
                    onClick={ (e) => saveTask(e, board, boards, setBoards)}>Сохранить</button>
                    <button className='button cancelButton' 
                    onClick={ (e) => cancel(e, true)}>Отмена</button>
                </form>
                </div>
            )}
            </div>
            </div>
        )
}

export default Boards;