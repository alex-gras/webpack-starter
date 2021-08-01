import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

console.log( todoList.todos );

todoList.todos.forEach( crearTodoHtml );

todoList.todos[1].imprimirClase();



// const tarea = new Todo('Aprender JavaScript !!!');
// todoList.nuevoTodo ( tarea );

// tarea.imprimirClase();

// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);








