import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, TableContainer, Typography, Table, TableRow, TableCell, TableHead, TableBody } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

export default function page() {
    return (
        <>
            <Box sx={{
                my: 5, ml: 10,
                "& h4": {
                    fontWeight: 'bold',
                    mb: 2,
                },
                "& p": { textAlign: 'justify' },
            }}>
                <Typography variant='h4'>
                    Contact My Resturant
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deleniti dicta ad quis asperiores repudiandae voluptatem blanditiis. Harum eum, dolorem dolores blanditiis voluptatem praesentium quod, dolor odit mollitia voluptates error!</p>
            </Box>
            <Box sx={{
                m: 3, width: "600px", ml: 10, "@media (max-width:600px)": {
                    width: "300px",
                },
            }}>
                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "black", color: "white" }} align='center'>Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1234567890(Tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    )
}

