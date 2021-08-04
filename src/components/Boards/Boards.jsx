import React, { useState } from 'react';
import './Boards.css';
import { dragStartHandler, dragLeaveHandler, dragEndHandler, 
    dragOverHandler, dropHandler, dropTaskHandler, edit, saveChange, 
    deleteGoal, addTask, create, cancel, checkEmpty, cleanErrors } 
    from './../../redux/state';

const Boards = (props) => {
    let dataBoards = localStorage.getItem('trello') ? JSON.parse(localStorage.getItem('trello')) : [];
    localStorage.setItem('trello', JSON.stringify(dataBoards));

    // const [boards, setBoards] = useState(props.dataBoard);
    const [boards, setBoards] = useState(dataBoards);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    return(
        <div>
        <h1 className='title title_main'>Ваши доски</h1>
        <form className='change-form change-form_main'>
            <label className='change-label'>
                <div className='change-input-error change-input-error_main'></div>
            <input className='change-input change-board-input change-input_main' 
            onInput={ (e) => checkEmpty(e)} onBlur={ (e) => cleanErrors(e)} placeholder='Введите название доски'></input>
            </label>
             <button className='button button_main' onClick={ (e) => {create(e, null, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Добавить доску</button>
        </form>
        <div className='boards'>
            {boards.map(board => 
            <div key={board.id} id={board.id} className='board'
            onDragOver={ (e) => dragOverHandler(e)}
            onDrop={ (e) => {dropTaskHandler(e, board, currentBoard, currentTask, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>
                <h2 className='title board-title'>{board.title}</h2>
                <button className='button button_edit button_edit-board' onClick={ (e) => edit(e, false)}>Редактировать доску</button>
                    <form className='change-form'>
                    <label className='change-label'>
                        <div className='change-input-error'></div>
                    <input className='change-input change-board-input' 
                    onInput={ (e) => checkEmpty(e)} onBlur={ (e) => cleanErrors(e)} placeholder='Введите название доски'></input>
                    </label>
                    <button className='button button_save' 
                    onClick={ (e) => {saveChange(e, null, board, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Сохранить</button>
                    <button className='button button_cancel' 
                    onClick={ (e) => cancel(e, false)}>Отмена</button>
                </form>
                    <button className='button button_delete button_delete-board' onClick={ (e) => {deleteGoal(e, null, board, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Удалить доску</button>
                {board.tasks.map(task =>
                <div key={task.id} id={task.id} className='task'
                onDragStart={ (e) => dragStartHandler(e, board, task, setCurrentBoard, setCurrentTask)}
                onDragLeave={ (e) => dragLeaveHandler(e)}
                onDragEnd={ (e) => dragEndHandler(e)}
                onDragOver={ (e) => dragOverHandler(e)}
                onDrop={ (e) => {dropHandler(e, board, task, currentBoard, currentTask, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}
                draggable={true}>
                    <h3 className='task-title'>{task.title}</h3>
                    <p className='task-text'>{task.text}</p>
                    <button className='button button_edit' onClick={ (e) => edit(e, true )}>Редактировать</button>
                    <form className='change-form'>
                    <label className='change-label'>
                        <div className='change-input-error'></div>
                    <input className='change-input' onInput={ (e) => checkEmpty(e)} 
                    onBlur={ (e) => cleanErrors(e)} placeholder='Введите название задачи'></input>
                    </label>
                    <label className='change-label'>
                        <div className='change-textarea-error'></div>
                        <textarea cols='10' rows='10' className='change-textarea' 
                        onInput={ (e) => checkEmpty(e)} 
                        onBlur={ (e) => cleanErrors(e)} placeholder='Введите описание задачи'></textarea>
                    </label>
                    <button className='button button_save' 
                    onClick={ (e) => {saveChange(e, task, board, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Сохранить</button>
                    <button className='button button_cancel' 
                    onClick={ (e) => cancel(e, true)}>Отмена</button>
                </form>
                    <button className='button button_delete' onClick={ (e) => {deleteGoal(e, task, board, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Удалить</button>
                </div>
                )}
                <button className='button button_add' onClick={ (e) => addTask(e, board)}>Добавить задачу</button>
                <form className='change-form'>
                    <label className='change-label'>
                        <div className='change-input-error'></div>
                    <input className='change-input' 
                    onInput={ (e) => checkEmpty(e)} 
                    onBlur={ (e) => cleanErrors(e)} placeholder='Введите название задачи'></input>
                    </label>
                    <label className='change-label'>
                        <div className='change-textarea-error'></div>
                        <textarea cols='10' rows='10' className='change-textarea' 
                        onInput={ (e) => checkEmpty(e)} 
                        onBlur={ (e) => cleanErrors(e)} placeholder='Введите описание задачи'></textarea>
                    </label>
                    <button className='button button_save' 
                    onClick={ (e) => {create(e, board, boards, setBoards); localStorage.setItem('trello', JSON.stringify(boards))}}>Сохранить</button>
                    <button className='button button_cancel' 
                    onClick={ (e) => cancel(e, true)}>Отмена</button>
                </form>
                </div>
            )}
            </div>
            </div>
        )
}

export default Boards;