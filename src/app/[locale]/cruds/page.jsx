"use client"
import React from 'react'
import { Button, Checkbox, TextField, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';


export default function Page() {



    const [addTodo, setAddTodo] = useState("");
    const [todoList, setTodoList] = useState(() => {
        const rawTodos = localStorage.getItem("TodoList");
        if (!rawTodos)
            return [];
        return JSON.parse(rawTodos);
    });



    const addTodoItem = () => {
        if (addTodo.trim()) {
            const item = {
                id: todoList.length + 1,
                text: addTodo,
                completed: false,
            };
            setTodoList(prev => [...prev, item]);
            setAddTodo("");
        }
    }



    //todo add data to localStorage 
    localStorage.setItem("TodoList", JSON.stringify(todoList));




    const deleteTodo = (id) => {
        setTodoList(todoList.filter(t => (t.id !== id)))
    }
    const editTodo = (id) => {
        const todo = todoList.find((t) => t.id === id);
        setAddTodo(todo.text);
    }
    const toggleCompleted = (id) => {
        setTodoList(todoList.map(t => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        }))
    }

    return (
        <>
            <Box>
                <TextField type="text" placeholder='Enter name' value={addTodo} onChange={event => setAddTodo(event.target.value)} />
                <Button onClick={() => addTodoItem()} variant='outlined' color="secondary">Add</Button>
                <Box>
                    {todoList.map((t) => <Box key={t.id}>
                        <Checkbox checked={todoList} onChange={() => toggleCompleted(t.id)} />
                        {t.text}
                        <Button onClick={() => deleteTodo(t.id)} variant='outlined' color='error'>Delete</Button>
                        <Button onClick={() => editTodo(t.id)} variant="outlined" color="success">Edit</Button>
                    </Box>)}
                </Box>
            </Box>
        </>
    )
}

