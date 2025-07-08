"use client"
import { MenuListss } from '@/data/data'
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { dynaPuffFont } from './fonts'



// import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function page() {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }


    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    MenuListss.map((menu, idx) => (
                        <Card sx={{
                            maxWidth: {
                                md: "390px", xl: "490px"
                            }, display: "flex", flexWrap: "wrap", justifyContent: "center", m: 4
                        }} key={menu.id ?? idx}>
                            <CardActionArea component={Link} href={`/menu/${menu.id}`}>
                                <CardMedia sx={{ minHeight: 400 }} component={'img'} image={menu.image[0]} alt={menu.name} />
                                <CardContent>
                                    <Typography variant='h5' gutterBottom
                                        component={"div"} >
                                        {menu.name}
                                        <Box sx={{ width: 5, display: 'flex', alignItems: 'center' }}>
                                            <Rating
                                                name="hover-feedback"
                                                value={value}
                                                precision={0.5}

                                                getLabelText={getLabelText}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    setHover(newHover);
                                                }}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            {value !== null && (
                                                <Box sx={{ ml: 2, fontSize: "10px" }}>{labels[hover !== -1 ? hover : value]}</Box>
                                            )}
                                        </Box>
                                        {/* <StarBorderIcon sx={{ color: "black", verticalAlign: "middle", ml: 0.1, size: "grow", hovar: "yellow" }} style={{}} /> */}
                                    </Typography>
                                    <Typography variant='body2' className={dynaPuffFont.className}>
                                        {menu.Description}
                                    </Typography>
                                    <Typography className={dynaPuffFont.className}>
                                        Price:{menu.price}<CurrencyRupeeIcon sx={{ fontSize: 13 }} />
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>

        </>
    )
}
