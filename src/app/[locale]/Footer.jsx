"use client";
import { Typography, Box, Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import { useTranslations } from 'next-intl';




export default function Footer() {
    const t = useTranslations('footer');

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
                }}>{t('title')}</Typography>
                <Box>
                    <Button component={Link} href="/hi" sx={{ color: "goldenrod" }} >Hindi</Button>
                    <Button component={Link} href="/en" sx={{ color: "goldenrod" }}>English</Button>
                </Box>
            </Box >
        </>
    )
}
