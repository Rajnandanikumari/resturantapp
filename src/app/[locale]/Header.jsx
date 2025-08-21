"use client"
import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../../styles/HeaderStyle.module.css";
// import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


// import Logo from './logo.svg';
// import { NavLink } from 'react-router-dom';


export default function Header() {
    // const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const t = useTranslations('headers');
    const drawer = (
        <Box>

        </Box>
    )
    return (
        <>
            <Box>
                <AppBar position="sticky" component="nav" sx={{ backgroundColor: "black", height: "80px" }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2, display: { sm: 'none' },

                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }} className={styles.logoTitle}>
                            <img src={"/logo.svg"} alt="logo" height={"70"} width="250" />
                        </Typography>
                        <Box sx={{
                            display: { xs: 'none', sm: 'block' }, "& li a": {
                                color: "white",
                                transition: "color 0.3s ease",
                            },
                            "& li a:hover": {
                                color: "goldenrod"
                            }
                        }}

                        >
                            <ul className={styles.navigation}>
                                <li>
                                    <Link href="/">{t('home')}</Link>
                                </li>
                                <li> <Link href="/menu">{t('menu')}</Link ></li>
                                <li> <Link href="/about">{t("about")}</Link ></li>
                                <li><Link href="/contact">{t("contact")}</Link ></li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                {/* <Box component="nav"> */}
                {/* <Drawer variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        display: { xs: "block", sm: "none" }, "&.MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                        },
                    }}>
                    {drawer}
                </Drawer>
                <Box sx={{ p: 1 }}>
                </Box> */}
                {/* </Box> */}
            </Box>
        </>
    )
}
