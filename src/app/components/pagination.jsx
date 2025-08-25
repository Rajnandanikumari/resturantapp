
import { Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';


const Pagination = (
    {
        goToNextPage,
        goToPrevPage,
        handlePageChange,
        noOfPages,
        currentpage
    }
) => {
    return (
        <Box>
            <Button
                disabled={currentpage === 0}
                sx={{ padding: "2px", border: "2px solid black", cursor: "pointer", color: "goldenrod" }}
                onClick={goToPrevPage}
            >
                <ArrowBackIosNewIcon />
            </Button>
            {[...Array(noOfPages).keys()].map(n => (
                <Button
                    sx={{
                        padding: "2px",
                        border: "2px solid black",
                        cursor: "pointer",
                        color: "black",
                        backgroundColor: n === currentpage ? "goldenrod" : "",

                    }}

                    key={n}
                    onClick={() => handlePageChange(n)}
                >
                    {n}
                </Button>
            ))}
            <Button
                disabled={currentpage === noOfPages - 1}
                sx={{ padding: "2px", border: "2px solid black", cursor: "pointer", color: "goldenrod" }}
                onClick={goToNextPage}
            >
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    )
}

export default Pagination;