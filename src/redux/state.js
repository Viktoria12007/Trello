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
}

export function edit(e, textarea) {
e.target.style.display='none';
const changeForm = e.target.nextSibling;
const changeInputError = changeForm.querySelector('.change-input-error');
const changeInput = changeForm.querySelector('.change-input');

if (textarea) {
  const textTask = e.target.previousSibling;
  const titleTask = textTask.previousSibling;
  const changeTextareaError = changeForm.querySelector('.change-textarea-error');
  const changeTextarea = changeForm.querySelector('.change-textarea');
  changeInput.value = titleTask.textContent;
  changeTextarea.value = textTask.textContent;
  textTask.style.display = 'none';
  titleTask.style.display = 'none';
  changeTextareaError.textContent = '';
}

else {
  const titleBoard = e.target.previousSibling;
  changeInput.value = titleBoard.textContent;
  titleBoard.style.display = 'none';
}
changeInputError.textContent = '';
changeForm.style.display = 'block';
}

export function saveChange(e, task, board, boards, setBoards) {
  e.preventDefault();
  const changeForm = e.target.closest('.change-form');
  const addEditButton = changeForm.previousSibling;
  const changeInput = changeForm.querySelector('.change-input');
  const changeInputError = changeInput.previousSibling;
  
  if (task !== null) {
  const textTask = addEditButton.previousSibling;
  const titleTask = textTask.previousSibling;
  const changeTextarea = changeForm.querySelector('.change-textarea');
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
    boards[currentIndex].title = changeInput.value;
    setBoards(boards.map(b => {
        if (b.id === board.id) {
            return board;
        }
        return b;
    }))
    titleBoard.style.display = 'block';
    changeInput.value = '';
    changeInputError.textContent = '';
    changeForm.style.display = 'none';
    addEditButton.style.display = 'inline-block';
  }
  if (changeInput.value.trim() === '') {
    changeInputError.textContent = 'Не указано название доски!';
  }
}
}

export function deleteGoal(e, task, board, boards, setBoards) {
  if (task !== null) {
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
}

export function addTask(e) {
  e.target.style.display='none';
  const changeForm = e.target.nextSibling;
  const changeInput = changeForm.querySelector('.change-input-error');
  const changeTextarea = changeForm.querySelector('.change-textarea-error');
  changeInput.textContent = '';
  changeTextarea.textContent = '';
  changeForm.style.display = 'block';
}

export function create(e, board, boards, setBoards) {

e.preventDefault();
const changeForm = e.target.closest('.change-form');
const changeInput = changeForm.querySelector('.change-input');
const changeInputError = changeInput.previousSibling;

if (board !== null) {
const addTaskButton = changeForm.previousSibling;
const changeTextarea = changeForm.querySelector('.change-textarea');
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
    // localStorage.setItem('trello', JSON.stringify(boards));
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
    boards.push(newBoard);
    setBoards(boards.map((b, index) => {
      b.id = index
      return b;
    }))
    changeInput.value = '';
    changeInputError.textContent = '';
    }
  else {
  changeInputError.textContent = 'Не указано название доски!';
  }
}
}

export function cancel(e, textarea) {
e.preventDefault();
const changeForm = e.target.closest('.change-form');
const addEditButton = changeForm.previousSibling;
const changeInput = changeForm.querySelector('.change-input');
const changeInputError = changeInput.previousSibling;
  if (textarea) {
    const textTask = addEditButton.previousSibling;
    const titleTask = textTask.previousSibling;
    const changeTextarea = changeForm.querySelector('.change-textarea');
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
  if (e.target.value === '' && e.target.classList.contains('change-board-input')) {
    e.target.previousSibling.textContent = 'Не указано название доски!';
  }
  if (e.target.value === '' && e.target.className === 'change-input') {
    e.target.previousSibling.textContent = 'Не указано название задачи!';
  }
  if (e.target.value === '' && e.target.className === 'change-textarea') {
    e.target.previousSibling.textContent = 'Не указано описание задачи!';
  }
}

export function cleanErrors(e) {
    e.target.previousSibling.textContent = '';
}

export default state;