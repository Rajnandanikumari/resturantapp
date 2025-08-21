// components/ReadMore.jsx
"use client";
import React, { useState } from "react";
import { Typography, Link, Box } from "@mui/material";

export default function ReadMore({
    text,
    charLimit = 100,
    variant = "body1",
    sx = {},
}) {
    const [expanded, setExpanded] = useState(false);

    // no truncation needed if text is short
    if (text.length <= charLimit) {
        return (
            <Typography variant={variant} >
                {text}
            </Typography>
        );
    }

    const truncated = text.slice(0, charLimit) + "...";

    return (
        <Box>
            <Typography component="span" variant={variant}>
                {expanded ? text : truncated}
            </Typography>
            <Link
                component="button"
                variant="body2"
                onClick={() => setExpanded((prev) => !prev)}
                sx={{ ml: 1, color: "black", textDecoration: "none", "&:hover": { cursor: "pointer", textDecoration: "underline" } }}
            >
                {expanded ? "less" : "more"}
            </Link>
        </Box>
    );
}
