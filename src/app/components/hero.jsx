"use client";
import { Grid, Button, Box, Typography, Link } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Hero() {
    const [current, setCurrent] = React.useState(0);

    const images = useMemo(
        () => [
            { src: "/chhola.jpg", alt: "fully furnished house" },
            { src: "/chola1.jpg", alt: "fully furnished house" },
            { src: "/chola2.jpg", alt: "fully furnished house" },
            { src: "/dosa.jpg", alt: "fully furnished house" },
            { src: "/dosa1.jpg", alt: "fully furnished house" },
            { src: "/gujrati.jpg", alt: "fully furnished house" },
        ],
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    function handleLeft() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    function handleRight() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <Grid container direction={{ xs: "column-reverse", md: "row" }} sx={{}}>
            <Grid
                size={{ xs: 12, md: 6 }}
                justifyContent="center"
                alignContent="center">
                <Box sx={{ padding: { xs: "30px 20px", md: "40px" } }}>
                    <Typography varient="h1" color="black" fontWeight={700} fontSize={65} >Food Website</Typography>
                    <Typography variant="body1" fontSize={48}>Best Food In India</Typography>
                    <Link href="/menu">
                        <Button sx={{ padding: "1rem 3rem", backgroundColor: "black", color: "white" }}>ORDER NOW</Button>
                    </Link>
                </Box>

            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ position: "relative" }}>
                    <Button
                        sx={{
                            position: "absolute",
                            top: "42%",
                            left: { xs: "30px", md: "-30px" },
                        }}
                        onClick={handleLeft}
                    >
                        <ChevronRightIcon
                            sx={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "goldenrod",
                                borderRadius: "50%",
                                color: "white",

                            }}
                        />
                    </Button>
                    <Button
                        sx={{
                            position: "absolute",
                            top: { xs: "31%", md: "58%" },
                            left: { xs: "30px", md: "-30px" },
                        }}
                        onClick={handleRight}
                    >
                        <ChevronRightIcon
                            sx={{
                                color: "white",
                                width: "50px",
                                height: "50px",
                                backgroundColor: "goldenrod",
                                borderRadius: "50%",
                                transform: 'rotate(180deg)'
                            }}
                        />
                    </Button>
                    {images.map(
                        (img, index) =>
                            current === index && (
                                <Box
                                    key={index}

                                >
                                    <Image
                                        src={images[current].src}
                                        alt={images[current].alt}
                                        width={450}
                                        height={400}
                                        style={{
                                            borderRadius: 3,
                                            // boxShadow: "0 0 50px goldenrod",
                                            objectFit: "cover",
                                            maxHeight: 500,
                                            height: "auto",
                                            width: "98%",
                                            padding: "10px",

                                        }}
                                    />
                                </Box>
                            )
                    )}
                </Box>
            </Grid>
        </Grid >
    )
}