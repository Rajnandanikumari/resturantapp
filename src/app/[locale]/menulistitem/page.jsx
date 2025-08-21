"use client"
import { Box, Typography, Divider, Grid, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'

export default function Menulistitemss() {
    return (
        <>


            <Grid container spacing={2}>
                <Grid sx={{ border: '1px solid black', marginTop: "40px" }}>
                    <Divider sx={{ marginTop: "10px" }}>
                        <Typography component="span" variant="subtitle1" fontWeight="bold" sx={{ letterSpacing: 8, lineHeight: 'normal', justifyContent: "center", alignContent: "center" }}>
                            YOUR RESTAURANT
                        </Typography>
                    </Divider>
                    <Box sx={{
                        width: 120, height: 120, borderRadius: '50%', border: "2px solid black", flexDirection: "column",
                        alignItems: 'center', justifyContent: "center", display: "flex", backgroundColor: 'goldenrod'
                    }}>
                        <Typography variant="body1" fontWeight="bold">BEST FOOD</Typography>
                        <Typography variant="body2" fontStyle="italic">EST 1999</Typography>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                        height: "98px",
                        width: "120px",
                        borderRight: '1px solid',
                        marginLeft: "10px",
                        marginTop: "-108px"
                        // line thickness

                    }} />
                    <Typography variant='h4' sx={{}}>MENU</Typography>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{
                        height: "98px",
                        width: "120px",
                        borderRight: '1px solid',
                        marginLeft: "600px",
                        marginTop: "-60px"
                        // line thickness
                    }} />
                    {/* logoIcon  */}
                    <Box sx={{
                        width: 120, height: 120, flexDirection: "column", alignItems: 'center', justifyContent: "center", display: "flex", marginLeft: "730px",
                        marginTop: "-120px"
                    }}>
                        <Typography variant="body1" fontWeight="bold">OPEN HOURS</Typography>
                        <Typography variant="body2" fontStyle="bold">8AM - 11PM</Typography>
                    </Box>
                    <Typography component="span" variant="subtitle1" fontWeight="bold" sx={{ lineHeight: "normal", marginLeft: "320px", color: "goldenrod", wordSpacing: 4 }}>THE BEST CAFE IN YOUR CITY</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Grid sx={{}}>
                        <Box sx={{ width: "200px", height: "50px", justifyContent: "center", alignItems: "center" }}>
                            <Typography component="span" variant='subtitle1' sx={{ my: 2, color: "goldenrod" }}>FOOD CATEGORY</Typography>
                            <Divider textAlign="left" sx={{ width: "127px" }} />
                            <Typography sx={{ fontWeight: "bold" }}>Dosa</Typography>
                            <Typography>Dosas are served hot, often with chutney and sambar.
                                sorts of fillings such as paneer or potato</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>Idli</Typography>
                            <Typography>The food prepared using this recipe
                                is now called uddina idli in Karnataka.</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>Chhola</Typography>
                            <Typography>The dish "Chole Bhature" consists of chickpeas cooked in a spicy gravy (Chole)</Typography>
                        </Box>
                        <Box sx={{ width: "200px", height: "50px", marginLeft: "240px", marginTop: "-50px" }}>
                            <img src="https://i.pinimg.com/736x/7c/91/a7/7c91a77e33527beaec4e75e19815db51.jpg" alt="image" width="350" />
                            <Typography sx={{ color: "goldenrod" }}>FOOD NAME HERE</Typography>
                            <Typography sx={{ width: "10px", height: "3px", justifyContent: "center", alignContent: "center" }}>Dosa,Biryani,Idli,Sambar,Pongal,Vada,Appam,Shahi Paneer,Malai Kofta</Typography>
                        </Box>
                        <Box sx={{ width: "200px", height: "50px", marginLeft: "660px", justifyContent: "center", marginTop: "-49px", alignItems: "center" }}>
                            <Typography component="span" variant='subtitle1' sx={{ my: 2, color: "goldenrod" }}>FOOD CATEGORY</Typography>
                            <Divider textAlign="left" sx={{ width: "127px" }} />
                            <Typography sx={{ fontWeight: "bold" }}>Dal Makhani</Typography>
                            <Typography>A rich and flavorful lentil dish made with black lentils, kidney beans, cream, and butter. </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>Naan</Typography>
                            <Typography>A leavened, oven-baked flatbread, often cooked in a tandoor</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>Amritsari Kulcha</Typography>
                            <Typography>A type of leavened bread stuffed with potatoes and spices. </Typography>
                        </Box>

                    </Grid>
                    <Divider sx={{ my: 50 }} />
                    <Grid>
                        <Grid>
                            <Box sx={{ width: "200px", height: "50px", justifyContent: "center", alignItems: "center", marginTop: "-380px" }}>
                                <Typography component="span" variant='subtitle1' sx={{ color: "goldenrod" }}>FOOD CATEGORY</Typography>
                                <Divider textAlign="left" sx={{ width: "127px" }} />
                                <img src="https://lynkfoods.com/cdn/shop/articles/history-of-paneer-jalebi-from-festivals-to-modern-treats-111795.jpg?v=1741321909" alt="image" width="260" height="280" />
                                <Typography sx={{ fontWeight: "bold" }}>Idli</Typography>
                                <Typography>The food prepared using this recipe
                                    is now called uddina idli in Karnataka.</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>Chhola</Typography>
                                <Typography>The dish "Chole Bhature" consists of chickpeas cooked in a spicy gravy (Chole)</Typography>
                            </Box>
                            <Box sx={{ width: "200px", height: "50px", marginLeft: "330px", marginTop: "-40px" }}>
                                <Typography sx={{ color: "goldenrod" }}>SPECIAL MENUS</Typography>
                                <Divider textAlign="left" sx={{ width: "127px" }} />
                                <Typography sx={{ fontWeight: "bold" }}>Idli</Typography>
                                <Typography>The food prepared using this recipe
                                    is now called uddina idli in Karnataka.</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>Chhola</Typography>
                                <Typography>The dish "Chole Bhature" consists of chickpeas cooked in a spicy gravy (Chole)</Typography>
                                <Divider textAlign="left" sx={{ width: "127px", height: "17px" }} />
                                <Typography sx={{ color: "goldenrod", marginTop: "17px" }}>FOOD CATEGORY</Typography>
                                <Divider textAlign="left" sx={{ width: "127px", height: "17px" }} />
                                <Box sx={{ width: "100px", marginTop: "20px" }}>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        {/* <Button component={Link} href="/menulistitem/orderbook" > */}
                                        <Typography>Cheese Burger</Typography>
                                        <Typography sx={{ paddingX: 6 }}>3.00</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography >French Fries</Typography>
                                        <Typography sx={{ paddingX: 8 }}>2.00</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Ice Cream</Typography>
                                        <Typography sx={{ paddingX: 10 }}>2.50</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Cheese Cake</Typography>
                                        <Typography sx={{ paddingX: 7.6 }}>8.00</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Green Tea</Typography>
                                        <Typography sx={{ paddingX: 10 }}>6.00</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Ice Chocolate</Typography>
                                        <Typography sx={{ paddingX: 6.9 }}>1.50</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Lemon Tea</Typography>
                                        <Typography sx={{ paddingX: 9 }}>1.70</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Avocado Juice</Typography>
                                        <Typography sx={{ paddingX: 6 }}>2.80</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Spicy Burger</Typography>
                                        <Typography sx={{ paddingX: 7.8 }}>5.90</Typography>
                                    </Box><Box sx={{
                                        display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", alignItems: "center",
                                    }}>
                                        <Typography>Cheese Sandwich</Typography>
                                        <Typography sx={{ paddingX: 3.4 }}>7.09</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "200px", height: "50px", marginLeft: "600px", justifyContent: "center", alignItems: "center", marginTop: "-70px" }}>
                                <Typography component="span" variant='subtitle1' sx={{ my: 2, color: "goldenrod" }}>FOOD CATEGORY</Typography>
                                <Divider textAlign="left" sx={{ width: "127px" }} />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdEO9nGDjv1_TjbLdKdXVJqQ0NWg8LVD3WA&s" alt="image" width="250" height="280" />
                                <Typography sx={{ fontWeight: "bold" }}>Rasgula</Typography>
                                <Typography>A leavened, oven-baked flatbread, often cooked in a tandoor</Typography>
                                <Typography sx={{ fontWeight: "bold" }}>Amritsari Kulcha</Typography>
                                <Typography>A type of leavened bread stuffed with potatoes and spices. </Typography>
                            </Box>
                            <Divider sx={{ my: 70 }} />
                            <Box sx={{ marginTop: -70, justifyContent: "space-between" }}>
                                <Typography variant='span' sx={{ fontWeight: "bold", color: "black", fontSize: "17px", marginLeft: 3 }}>social media here</Typography>
                                <Box sx={{ color: "goldenrod", fontWeight: "bold", marginLeft: "240px" }}>
                                    <Typography>1231 MAIN STREET,YOUR CITY,STATE 1231</Typography>
                                    <Typography>FOR RESERVATION PLEASE CALL : +91-6647657837 </Typography>
                                </Box>
                                <Typography variant='span' sx={{ fontWeight: "bold", color: "black", fontSize: "17px", marginLeft: "700px", marginTop: -20 }}>www.returant.com</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >

            <Grid container spacing={2}>
                <Grid size={{ sm: 12, md: 16 }}
                    sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Button component={Link} href="/menulistitem/orderbook" variant="contained" sx={{ backgroundColor: 'goldenrod', color: "white" }}>BOOK 🍽️ Meal</ Button >
                </Grid>
            </Grid >

        </>
    )
}
