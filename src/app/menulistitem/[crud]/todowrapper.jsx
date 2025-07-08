// "use client"
// import React, { useState } from 'react'
// import { Typography, Box } from '@mui/material';
// import TodoForm from './TodoForm'
// import { v4 as uuidv4 } from 'uuid'
// import EditTodoForm from './EditTodo';
// import Todo from './Todo';

// function TodoWrapper() {
//     const [todos, setTodos] = useState([]);


//     //Add Todo
//     const addTodo = (todo) => {
//         setTodos([
//             ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false },
//         ]);
//     }

//     //Delete Todo
//     const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

//     const toggleComplete = (id) => {
//         setTodos(
//             todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
//         )
//     }

//     //Edit Task Todo
//     const editTodo = (id) => {
//         setTodos(
//             todos.map((todo) => todo.id === id ? { ...todo, isEditing: true } : todo)
//         )
//     }

//     //Edit Task Todo
//     const editTask = (task, id) => {
//         setTodos(
//             todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: false } : todo)
//         )
//     }
//     console.log("todos", todos)
//     return (
//         <Box sx={{ backgroundColor: "black", padding: "2rem", borderRadius: "5px", boxShadow: "0 0 1.0714rem rgba(0,0,0,0.1)", maxHeight: "30rem", overflowY: auto }} >
//             <Typography>Web Development Tasks!</Typography>
//             <TodoForm addTodo={addTodo} />

//             {/* Display Todo  */}
//             {
//                 todos.map((todo) => todo.isEditing ? (
//                     <EditTodoForm editTodo={editTask} task={todo} />) : (<Todo
//                         key={todo.id}
//                         task={todo}
//                         deleteTodo={deleteTodo}
//                         editTodo={editTodo}
//                         toggleComplete={toggleComplete}
//                     />)
//                 )
//             }
//         </Box >
//     )
// }

// export default TodoWrapper
