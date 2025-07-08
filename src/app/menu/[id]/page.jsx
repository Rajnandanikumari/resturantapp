"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { MenuListss } from '@/data/data';
import { Box, Button, Grid, Typography, IconButton, Table } from '@mui/material';
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AddIcon from '@mui/icons-material/Add';
import ReadMore from '@/app/components/readmore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';


export default function MenuItemPage() {
    const params = useParams();
    const id = Number(params.id);

    const labels = {
        0.5: '100', 1: '100+', 1.5: '200', 2: '200+',
        2.5: '300', 3: '300+', 3.5: '400', 4: '400+',
        4.5: '500', 5: '500+',
    };



    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''} — ${labels[value]}`;
    }

    const item = MenuListss.find(item => item.id === id);
    if (!item) return <Typography>Item not found</Typography>;


    const description = `
           The cuisine of Western India is diverse.Maharashtrian cuisine is diverse and ranges from bland to fiery hot.
           The cuisine of Western India is diverse.Maharashtrian cuisine is diverse and ranges from bland to fiery hot.
           The cuisine of Western India is diverse.Maharashtrian cuisine is diverse and ranges from bland to fiery hot...`
        ;
    const [clickImage, setClickImage] = useState(item.image[0])


    const changeImage = (index) => {
        setClickImage(item.image[index])
    }

    const [data, setData] = useState([])
    // useEffect(async () => {
    //     let data = await fetch("https://fakestoreapi.com/products");
    //     data = await data.json();
    //     console.log(data);
    //     setData(data)

    // }, [])
    // console.warn(data);


    return (

        <Grid container sx={{ position: "relative", mt: 4, ml: 6 }} spacing={2} >
            <Grid size={{ xs: 12, lg: 5, direction: "row" }}>
                {item.image.map((image, index) => (
                    <Box key={index}>
                        <img src={image}
                            onClick={() => changeImage(index)}
                            style={{ width: "40px", height: "40px" }} />
                    </Box>
                ))}
                <img src={clickImage}
                    alt={item.name}
                    height={300}
                    width={300}
                    style={{
                        borderRadius: 65,
                        display: "block",
                        marginTop: "-250px",
                        marginLeft: "70px",
                        position: "absolute",
                        width: { md: "360px", sm: "700px" }
                    }} />


                < Button href="/menulistitem" sx={{
                    marginLeft: "140px",
                    width: 150,
                    border: '4px solid #ff1744',
                    color: "#ff1744",
                    mt: 3,
                    '&:hover': { backgroundColor: '#ff1744', color: "black" },
                }}>
                    Add
                    <AddIcon sx={{
                        color: " #ff1744", fontSize: 20, alignItems: "center", '&:hover': { color: "black" }

                    }} />
                </Button>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}
                sx={{ overflowY: "scroll", height: "520px", color: "black" }}>
                <Typography variant='h5' style={{ ml: 0.5, fontWeight: "bold" }}>{item.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(e, newValue) => setValue(newValue)}
                        onChangeActive={(e, newHover) => setHover(newHover)}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
                <ReadMore
                    text={description}
                    charLimit={120}
                    variant="p"
                    sx={{
                        mt: 2, fontSize: 18,
                        spacing: 5,
                    }}
                />
                <Typography variant="h8" sx={{ color: "#0000", fontSize: "2" }}>
                    <CurrencyRupeeIcon sx={{ fontSize: 13, mr: -0.9 }} /> {item.price}
                </Typography>
                {/* <Table>

                    {data.map((pro) =>
                        <tr>
                            <td>{pro.title}</td>
                        </tr>
                    )}

                </Table> */}
                <Typography variant="h6" style={{ color: "black", fontStyle: "bold", mt: "-2" }}>Available Offers</Typography>
                <Typography variant="body1" component="div"><LabelImportantIcon sx={{ color: "#2e7d32", verticalAlign: "bottom" }} /><Box component="span" sx={{ color: 'black', fontWeight: "bold", display: "inline" }}>Combo Offer</Box>sx2 items save ₹20; Buy 3 or more save ₹40 <Box sx={{ color: "#43a047", fontWeight: 600, display: "inline" }}>T&C</Box></Typography>
                <Typography variant="body1" component="div"><LabelImportantIcon sx={{ color: "#2e7d32", verticalAlign: "bottom" }} /><Box component="span" sx={{ color: "black", fontWeight: "bold", display: "inline" }}>Special Price </Box>Get extra 5% off (price inclusive of cashback/coupon)<Box sx={{ color: "#43a047", fontWeight: 600, display: "inline" }}>T&C</Box></Typography>
                <Typography variant="body1" component="div"><LabelImportantIcon sx={{ color: "#2e7d32", verticalAlign: "bottom" }} /><Box component="span" sx={{ color: "black", fontWeight: "bold", display: "inline" }}>Bank Offer 100% </Box>Cashback upto 500Rs on Axis Bank SuperMoney Rupay CC UPI transactions on super.money UPI <Box sx={{ color: "#43a047", fontWeight: 600, display: "inline" }}>T&C</Box></Typography>
                <Typography variant="body1" component="div"><LabelImportantIcon sx={{ color: "#2e7d32", verticalAlign: "bottom" }} /><Box component="span" sx={{ color: "black", fontWeight: "bold", display: "inline" }}>Bank Offer 5% </Box> Unlimited Cashback on Flipkart Axis Bank Credit Card <Box sx={{ color: "#43a047", fontWeight: 600, display: "inline" }}>T&C</Box></Typography>
                <Box sx={{ display: "flex", gap: 2, mt: -0.3 }}>
                    <ShareIcon sx={{ color: "#d81b60" }} />
                </Box>
            </Grid>
        </Grid >

    );
}
