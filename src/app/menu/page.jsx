"use client"
import { MenuListss } from '@/data/data'
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { dynaPuffFont } from './fonts'
// import Pagination from '@mui/material/Pagination';

// import StarBorderIcon from '@mui/icons-material/StarBorder';
import Pagination from '../components/Pagination'

export default function Page() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [currentpage, setCurrentpage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(1);

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


    // const [value, setValue] = React.useState(2);
    // const [hover, setHover] = React.useState(-1);
    // const [currentpage, setCurrentpage] = React.useState(0);
    // const [pageSize, setPageSize] = React.useState(1);

    const totalProducts = MenuListss.length;
    const noOfPages = Math.ceil(totalProducts / pageSize);
    const start = currentpage * pageSize;
    const end = start + pageSize;


    const handlePageChange = (n) => {
        setCurrentpage(n);
    }

    const goToNextPage = () => {
        setCurrentpage(prev => Math.min(prev + 1, noOfPages - 1));
    }

    const goToPrevPage = () => {
        setCurrentpage(prev => Math.max(prev - 1, 0));
    }

    const handleSizeChange = (e) => {
        const newSize = Number(e.target.value);
        setPageSize(newSize);
        setCurrentpage(0);
    }

    return !MenuListss.length ? (
        <h1>No Products found</h1>) : (
        <>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    MenuListss.slice(start, end).map((menu) => (
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
                <Pagination
                    goToNextPage={goToNextPage}
                    goToPrevPage={goToPrevPage}
                    handlePageChange={handlePageChange}
                    noOfPages={Math.ceil(MenuListss.length / pageSize)}
                    currentpage={currentpage}

                />
                <Box>
                    <label htmlFor='table_size' style={{ color: "black", fontSize: 20, fontWeight: "medium" }}>Show Entity :</label>
                    <select id="table_size"
                        value={pageSize}
                        onChange={handleSizeChange}
                        style={{ color: "black", fontSize: 17, fontWeight: "medium", borderRadius: 5, marginRight: 10, borderColor: "goldenrod" }}>
                        {[1, 2, 4, 6].map(n => (
                            <option key={n} value={n} sx={{ color: "goldenrod" }} >
                                {n}
                            </option>
                        ))}
                    </select>
                </Box>
            </Box>


            {/* <Typography variant='h6'>Status Entity </Typography>
                <Pagination count={10} color='warning' /> */}

        </>
    )
}
