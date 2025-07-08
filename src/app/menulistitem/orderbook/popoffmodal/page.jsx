"use client";
import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import Link from 'next/link';


const Popoffmodal = ({ closeModal }) => {
    return (
        <>
            <Grid container spacing={2} sx={{
                minHeight: "20vh", p: 2, border: 2, marginLeft: {
                    md: 30, xl: 90
                }, marginRight: 20, marginTop: 20, width: 450, boxShadow: 20, borderColor: "goldenrod"
            }}>
                <Grid size={{ md: 12, sm: 6 }}>
                    <Typography variant="h5" >Your Order Completed SuccessFully</Typography>
                    <Typography variant="h6">Thank You ❤️🎉✨</Typography>
                    <Button onClick={closeModal} component={Link} href="/home" sx={{ color: "white", backgroundColor: "goldenrod" }}>Accept It</Button>

                </Grid>
            </Grid >

        </>
    )
}

export default Popoffmodal
