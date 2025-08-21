"use client"
import { Typography, Box } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <>
            <Box sx={{
                my: 13, textAlign: "center",
                p: 2,
                "$ h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: '4rem'
                },
                "& p": {
                    textAlign: "justify",

                },
                "@media (max-width:600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: "1rem"
                    }
                }
            }}>
                <Typography variant='h4'> Welcome to my Resturant </Typography>
                <Typography variant="body1" sx={{ marginTop: "50px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius, nulla aut aperiam modi eligendi odit asperiores corrupti.
                    Ipsum nemo nobis laborum expedita iste eius ullam debitis aperiam, quasi cupiditate!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus debitis, cumque inventore, ratione odit soluta nulla maxime optio assumenda eaque
                    impedit tempora, harum corrupti deleniti aspernatur eligendi illum? Ducimus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur dolorem ducimus provident officiis illum architecto delectus, dolorum vero quis nemo laboriosam voluptatem unde consequatur
                    amet tenetur, commodi fuga suscipit!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eum iste fuga ab, eligendi commodi fugit harum eius atque, nostrum dignissimos quod, sint accusantium! Nihil corporis incidunt nostrum eaque eligendi.
                </Typography>
            </Box>
        </>
    )
}



