"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const Popoffmodal = () => {
    return (
        <Box sx={{ display: "grid", placeContent: "center", height: "100vh" }}>
            <Box
                sx={{
                    border: 2,
                    borderColor: "goldenrod",
                    textAlign: "center",
                    padding: "20px",
                }}
            >
                <Typography variant="h5">
                    Your Order Completed Successfully
                </Typography>
                <Typography variant="h6">Thank You ❤️🎉✨</Typography>
                <Button
                    component={Link}
                    href="/"
                    sx={{ color: "white", backgroundColor: "goldenrod" }}
                >
                    Accept It
                </Button>
            </Box>
        </Box>
    );
};

export default Popoffmodal;
