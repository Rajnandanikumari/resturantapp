"use client";
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link';


const Popoffmodal = ({ closeModal }) => {
    return (
        <>
            <Box sx={{ display: "grid", placeContent: "center", height: "100vh" }}>
                <Box sx={{ border: 2, borderColor: "goldenrod", textAlign: "center", padding: "20px" }}>
                    <Typography variant="h5" sx={{ justifyContent: "center", alignItems: "center" }}>Your Order Completed SuccessFully</Typography>
                    <Typography variant="h6">Thank You ❤️🎉✨</Typography>
                    <Button onClick={closeModal} component={Link} href="/" sx={{ color: "white", backgroundColor: "goldenrod" }}>Accept It</Button>

                </Box>
            </Box >

        </>
    )
}

export default Popoffmodal
