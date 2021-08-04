// let renderDOMTree = () => {
//     console.log('state change');
// }
export const state = {
    boards: [
      {id: 1, title: 'Что нужно сделать', 
      tasks: [{id:4, title: 'Задача №1', text: 'Что-то там №1'}, 
      {id:5, title: 'Задача №2', text: 'Что-то там №2'}, 
      {id:6, title: 'Задача №3', text: 'Что-то там №3'}],
      },
      {id: 2, title: 'Какие задачи в процессе', 
      tasks: [{id:7, title: 'Задача №4', text: 'Что-то там №4'}, 
      {id:8, title: 'Задача №5', text: 'Что-то там №5'}, 
      {id:9, title: 'Задача №6', text: 'Что-то там №6'}],
      },
      {id: 3, title: 'Что сделано', 
      tasks: [{id:10, title: 'Задача №7', text: 'Что-то там №7'}, 
      {id:11, title: 'Задача №8', text: 'Что-то там №8'}, 
      {id:12, title: 'Задача №9', text: 'Что-то там №9'}],
      }
      ]
}

// const [currentBoard, setCurrentBoard] = useState(null);
// const [currentTask, setCurrentTask] = useState(null);

// export const dragStartHandler = (e) => {
// //    setCurrentTask(task);
// }
// export const dragLeaveHandler = (e) => {
//     e.target.style.boxShadow = 'none';
// }
//  export const dragEndHandler = (e) => {
//     e.target.style.boxShadow = 'none';
// }
// export const dragOverHandler = (e, currentClass) => {
//     if (e.target.className === currentClass) {
//         e.target.style.boxShadow = '0 4px 3px gray';
//     }
// }
// export const dropHandler = (e) => {
//     // setCurrentTask(task);
//  }



// export const updateNewPostText = (newText) => {
//     // debugger;
    
//     state.profilePage.newPostText = newText;
//     renderDOMTree(state);
// }
// export const addMessage = () => {
//     // debugger;
//     let newMessage = {
//         id: '6',
//         message: state.messagesPage.newMessageText
//     }
//     state.messagesPage.dataHistoryMessages.push(newMessage);
//     state.messagesPage.newMessageText = '';
//     renderDOMTree(state);
// }
// export const updateNewMessageText = (newText) => {
//     // debugger;
    
//     state.messagesPage.newMessageText = newText;
//     renderDOMTree(state);
// }
// export const subscribe = (observer) => {
//   renderDOMTree = observer;
// }

// import React, { useState } from 'react';

// export const [boards, setBoards] = useState([
//   {id: 1, title: 'Что нужно сделать', 
//   tasks: [{id:4, title: 'Задача №1', text: 'Что-то там №1'}, 
//   {id:5, title: 'Задача №2', text: 'Что-то там №2'}, 
//   {id:6, title: 'Задача №3', text: 'Что-то там №3'}],
//   },
//   {id: 2, title: 'Какие задачи в процессе', 
//   tasks: [{id:7, title: 'Задача №4', text: 'Что-то там №4'}, 
//   {id:8, title: 'Задача №5', text: 'Что-то там №5'}, 
//   {id:9, title: 'Задача №6', text: 'Что-то там №6'}],
//   },
//   {id: 3, title: 'Что сделано', 
//   tasks: [{id:10, title: 'Задача №7', text: 'Что-то там №7'}, 
//   {id:11, title: 'Задача №8', text: 'Что-то там №8'}, 
//   {id:12, title: 'Задача №9', text: 'Что-то там №9'}],
//   }
// ]);

// export const [currentBoard, setCurrentBoard] = useState(null);
// export const [currentTask, setCurrentTask] = useState(null);

export function dragStartHandler(e, board, task, setCurrentBoard, setCurrentTask) {
 setCurrentBoard(board);
 setCurrentTask(task);
}
export function dragLeaveHandler(e) {
e.target.style.boxShadow = 'none';
}
export function dragEndHandler(e) {
e.target.style.boxShadow = 'none';
}
export function dragOverHandler(e) {
e.preventDefault();
if (e.target.className === 'task') {
  e.target.style.boxShadow = '0 4px 3px gray';
}
}
export function dropHandler(e, board, task, currentBoard, currentTask, boards, setBoards) {
e.preventDefault();
e.stopPropagation(); 
const currentIndex = currentBoard.tasks.indexOf(currentTask);
currentBoard.tasks.splice(currentIndex, 1);
const dropIndex = board.tasks.indexOf(task);
board.tasks.splice(dropIndex + 1, 0, currentTask);
board.tasks.map((t, index) => {
  t.id = index;
  return t;
})
setBoards(boards.map(b => {
  if (b.id === board.id) {
      return board;
  }
  if (b.id === currentBoard.id) {
      return currentBoard;
  }
  return b;
}))
e.target.style.boxShadow = 'none';
console.log(boards);
}

export function dropTaskHandler(e, board, currentBoard, currentTask, boards, setBoards) {
board.tasks.push(currentTask);
const currentIndex = currentBoard.tasks.indexOf(currentTask);
currentBoard.tasks.splice(currentIndex, 1);
board.tasks.map((t, index) => {
  t.id = index;
  return t;
})
setBoards(boards.map(b => {
if (b.id === board.id) {
  return board;
}
if (b.id === currentBoard.id) {
  return currentBoard;
}
return b;
}))
e.target.style.boxShadow = 'none';
console.log(boards);
}

export function editTask(e, textarea) {
e.target.style.display='none';
const changeForm = e.target.nextSibling;
const changeInputError = changeForm.querySelector('.changeInputError');
const changeInput = changeForm.querySelector('.changeInput');
if (textarea) {
const textTask = e.target.previousSibling;
const titleTask = textTask.previousSibling;
const changeTextareaError = changeForm.querySelector('.changeTextareaError');
const changeTextarea = changeForm.querySelector('.changeTextarea');
changeInput.value = titleTask.textContent;
changeTextarea.value = textTask.textContent;
textTask.style.display = 'none';
titleTask.style.display = 'none';
changeTextareaError.textContent = '';
}
else {
  const titleBoard = e.target.previousSibling;
// const titleTask = textTask.previousSibling;
// const changeTextareaError = changeForm.querySelector('.changeTextareaError');
// const changeTextarea = changeForm.querySelector('.changeTextarea');
changeInput.value = titleBoard.textContent;
// changeTextarea.value = textTask.textContent;
// textTask.style.display = 'none';
titleBoard.style.display = 'none';
// changeTextareaError.textContent = '';
}
changeInputError.textContent = '';
changeForm.style.display = 'flex';
}

export function saveChange(e, task, board, boards, setBoards) {
  e.preventDefault();
  const changeForm = e.target.closest('.changeForm');
  const addEditButton = changeForm.previousSibling;
  const changeInput = changeForm.querySelector('.changeInput');
  const changeInputError = changeInput.previousSibling;
  
  if (task !== null) {
  
  const textTask = addEditButton.previousSibling;
  const titleTask = textTask.previousSibling;
  
  const changeTextarea = changeForm.querySelector('.changeTextarea');
  
  const changeTextareaError = changeTextarea.previousSibling;

  if (changeInput.value.trim() !== '' && changeTextarea.value.trim() !== '') {
  const currentIndex = board.tasks.indexOf(task);
  board.tasks[currentIndex].title = changeInput.value;
  board.tasks[currentIndex].text = changeTextarea.value;
  setBoards(boards.map(b => {
      if (b.id === board.id) {
          return board;
      }
      return b;
  }))
  textTask.style.display = 'block';
  titleTask.style.display = 'block';
  changeInput.value = '';
  changeTextarea.value = '';
  changeInputError.textContent = '';
  changeTextareaError.textContent = '';
  changeForm.style.display = 'none';
  addEditButton.style.display = 'inline-block';
}
if (changeInput.value.trim() === '') {
  changeInputError.textContent = 'Не указано название задачи!';
}
if (changeTextarea.value.trim() === '') {
  changeTextareaError.textContent = 'Не указано описание задачи!';
}
  }
else {
  const titleBoard = addEditButton.previousSibling;
  if (changeInput.value.trim() !== '') {
    const currentIndex = boards.indexOf(board);
    // console.log(boards.board[currentIndex]);
    boards[currentIndex].title = changeInput.value;
    // boards.board[currentIndex].text = changeTextarea.value;
    setBoards(boards.map(b => {
        if (b.id === board.id) {
            return board;
        }
        return b;
    }))
    // textTask.style.display = 'block';
    titleBoard.style.display = 'block';
    changeInput.value = '';
    // changeTextarea.value = '';
    changeInputError.textContent = '';
    // changeTextareaError.textContent = '';
    changeForm.style.display = 'none';
    addEditButton.style.display = 'inline-block';
  }
  if (changeInput.value.trim() === '') {
    changeInputError.textContent = 'Не указано название доски!';
  }
  // if (changeTextarea.value.trim() === '') {
  //   changeTextareaError.textContent = 'Не указано описание задачи!';
  // }
}
console.log(boards);
}

export function deleteTask(e, task, board, boards, setBoards) {
  if (task !== null) {
    console.log(task);
const currentIndex = board.tasks.indexOf(task);
board.tasks.splice(currentIndex, 1);
board.tasks.map((t, index) => {
  t.id = index;
  return t;
})
setBoards(boards.map(b => {
  if (b.id === board.id) {
      return board;
  }
  return b;
}))
  }
  else {
    const currentIndex = boards.indexOf(board);
    boards.splice(currentIndex, 1);
    setBoards(boards.map((b, index) => {
      if (b.id === board.id) {
          return board;
      }
      b.id = index;
      return b;
    }))
  }
  
console.log(boards);
}

export function addTask(e) {
e.target.style.display='none';
const changeForm = e.target.nextSibling;
const changeInput = changeForm.querySelector('.changeInputError');
const changeTextarea = changeForm.querySelector('.changeTextareaError');
changeInput.textContent = '';
changeTextarea.textContent = '';
changeForm.style.display = 'flex';
}

export function saveBoard(e, 
  // board, 
  boards, setBoards) {
  e.preventDefault();
  const changeForm = e.target.closest('.changeForm');
  // const addTaskButton = changeForm.previousSibling;
  const changeInput = changeForm.querySelector('.changeInput');
  console.log(changeInput);
  // const changeTextarea = changeForm.querySelector('.changeTextarea');
  const changeInputError = changeInput.previousSibling;
  console.log(changeInputError);
  // const changeTextareaError = changeTextarea.previousSibling;
  
  if (changeInput.value.trim() !== '') {
  const newBoard = {};
  newBoard.title = changeInput.value;
  newBoard.tasks = [];
  // newTask.text = changeTextarea.value;
  boards.push(newBoard);
  setBoards(boards.map((b, index) => {
    // if (b.id === board.id) {
    //     return board;
    // }
    b.id = index
    return b;
  }))
  changeInput.value = '';
  // changeTextarea.value = '';
  changeInputError.textContent = '';
  console.log(changeInputError.textContent);
  // changeTextareaError.textContent = '';
  // changeForm.style.display = 'none';
  // addTaskButton.style.display = 'block';
  }
  else {
    console.log(changeInputError.textContent);
  changeInputError.textContent = 'Не указано название доски!';
  }
  // if (changeTextarea.value.trim() === '') {
  // changeTextareaError.textContent = 'Не указано описание задачи!';
  // }
  console.log(boards);
  }

export function saveTask(e, board, boards, setBoards) {

e.preventDefault();
const changeForm = e.target.closest('.changeForm');
const changeInput = changeForm.querySelector('.changeInput');
const changeInputError = changeInput.previousSibling;

if (board !== null) {

const addTaskButton = changeForm.previousSibling;

const changeTextarea = changeForm.querySelector('.changeTextarea');

const changeTextareaError = changeTextarea.previousSibling;

if (changeInput.value.trim() !== '' && changeTextarea.value.trim() !== '') {
const newTask = {};
newTask.title = changeInput.value;
newTask.text = changeTextarea.value;
board.tasks.push(newTask);
board.tasks.map((t, index) => {
  t.id = index;
  return t;
})
setBoards(boards.map(b => {
  if (b.id === board.id) {
      return board;
  }
  return b;
}))
changeInput.value = '';
changeTextarea.value = '';
changeInputError.textContent = '';
changeTextareaError.textContent = '';
changeForm.style.display = 'none';
addTaskButton.style.display = 'block';
}
if (changeInput.value.trim() === '') {
changeInputError.textContent = 'Не указано название задачи!';
}
if (changeTextarea.value.trim() === '') {
changeTextareaError.textContent = 'Не указано описание задачи!';
}
}
else {
  if (changeInput.value.trim() !== '') {
    const newBoard = {};
    newBoard.title = changeInput.value;
    newBoard.tasks = [];
    // newTask.text = changeTextarea.value;
    boards.push(newBoard);
    setBoards(boards.map((b, index) => {
      // if (b.id === board.id) {
      //     return board;
      // }
      b.id = index
      return b;
    }))
    changeInput.value = '';
    // changeTextarea.value = '';
    changeInputError.textContent = '';
    console.log(changeInputError.textContent);
    // changeTextareaError.textContent = '';
    // changeForm.style.display = 'none';
    // addTaskButton.style.display = 'block';
    }
    else {
      console.log(changeInputError.textContent);
    changeInputError.textContent = 'Не указано название доски!';
    }
}
console.log(boards);
}

export function cancel(e, textarea) {
e.preventDefault();
const changeForm = e.target.closest('.changeForm');
const addEditButton = changeForm.previousSibling;
const changeInput = changeForm.querySelector('.changeInput');
const changeInputError = changeInput.previousSibling;
if (textarea) {
const textTask = addEditButton.previousSibling;
const titleTask = textTask.previousSibling;
const changeTextarea = changeForm.querySelector('.changeTextarea');
const changeTextareaError = changeTextarea.previousSibling;
changeTextarea.value = '';
changeTextareaError.textContent = '';
textTask.style.display = 'block';
titleTask.style.display = 'block';
}
else {
  const titleBoard = addEditButton.previousSibling;
  titleBoard.style.display = 'block';
}
  changeInput.value = '';
  changeInputError.textContent = '';
  changeForm.style.display = 'none';
  addEditButton.style.display = 'inline-block';
}

export function checkEmpty(e) {
if (e.target.value !== '') {
e.target.previousSibling.textContent = '';
}
// if (e.target.value === '' && e.target.classList.contains('boardChangeInput')) {
//   e.target.previousSibling.textContent = 'Не указано название доски!';
// }
if (e.target.value === '' && e.target.classList.contains('mainChangeInput')) {
  e.target.previousSibling.textContent = 'Не указано название доски!';
}
if (e.target.value === '' && e.target.className === 'changeInput') {
     e.target.previousSibling.textContent = 'Не указано название задачи!';
}
if (e.target.value === '' && e.target.className === 'changeTextarea') {
 e.target.previousSibling.textContent = 'Не указано описание задачи!';
}
}



export default state;