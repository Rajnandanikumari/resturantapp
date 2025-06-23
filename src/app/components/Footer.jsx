"use client";
import { Typography, Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
    return (
        <>
            <Box sx={{
                textAlign: 'center', bgcolor: 'black', color: 'white', p: 3,
                '@media (max-width:54px)': {
                    bgcolor: 'black',
                }
            }}>
                <Box sx={{
                    my: 3, "& svg": { fontSize: "30px", cursor: "pointer" },
                    "& svg:hover": {
                        color: 'goldenrod',
                        transform: 'translateX(5px)',
                        transition: 'all 400ms'
                    }
                }}>
                    {/* icons  */}

                    <InstagramIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                    < YouTubeIcon />
                </Box>

                <Typography variant='h5' sx={{
                    '@media (max-width:600px)': {
                        fontSize: "1rem",
                    },
                }}>All rights Reserved &copy: Technifo IT</Typography>
            </Box >
        </>
    )
}
