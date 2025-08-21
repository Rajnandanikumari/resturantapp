// "use client"
// import { Button, Grid } from '@mui/material';
// import React from 'react'

// export default async function Page() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log("data", data);

//     return (
//         <>
//             <h1>User (SSR)</h1>
//             <ul>
//                 {data.map((product) => (
//                     <li key={product.id}>{product.title}</li>
//                 ))}
//             </ul>
//             <Grid container spacing={2} >
//                 <Grid size={{ xs: 6, md: 12 }}
//                     sx={{ ml: "2px" }}>
//                     < Button variant="contained" >CREATE</ Button >
//                     < Button variant="contained" color="success">UPDATE</ Button >
//                     < Button variant="contained" color="secondary">READ</ Button >
//                     < Button variant="contained" color="error" >DELETE</ Button ></Grid>
//             </Grid>

//         </>
//     );
// };
