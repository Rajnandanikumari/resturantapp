"use client"
import React, { useState } from 'react'
import { Button, Box } from '@mui/material';


function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue("");
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ width: "300px", borderColor: "goldenrod", color: "goldenrod", height: "55px", borderRadius: "15px", marginTop: "20px" }}
                />
                <Button type="submit" sx={{ backgroundColor: "goldenrod", color: "white", cursor: "pointer", height: "55px", borderRadius: "15px" }}>Add MORE</Button>
            </Box>
        </>
    )
}

export default TodoForm
