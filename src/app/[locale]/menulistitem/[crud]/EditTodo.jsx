"use client"
import { Box, Button } from '@mui/material';
import React, { useState } from 'react'

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
    }
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ borderColor: "goldenrod", marginTop: "2rem", width: "300px", color: "goldenrod", height: "55px", borderRadius: "15px" }}
                    placeholder='Update Task...' />
                <Button type="submit" sx={{ backgroundColor: "goldenrod", color: "white", cursor: "pointer", height: "55px", borderRadius: "15px" }}>Add MORE</Button>
            </Box>
        </>
    )
}

export default EditTodoForm
