"use client"
import { Typography, Box } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "goldenrod", padding: "0.78rem", borderRadius: "10px", marginBottom: "1rem", marginTop: "1rem" }}>
            <Typography sx={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
            <Box>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} onClick={() => deleteTodo(task.id)} />
            </Box>
        </Box>
    )
}

export default Todo
