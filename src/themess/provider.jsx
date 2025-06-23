"use client";

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themes from "./themes";


export default function Providers({ children }) {
    return (
        <ThemeProvider theme={themes}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}