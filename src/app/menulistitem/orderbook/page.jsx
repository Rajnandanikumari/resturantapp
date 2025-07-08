// app/page.jsx
"use client";
import Popoffmodal from './popoffmodal/page';
import React, { useState } from 'react';
import {
    Box,
    Table, TableHead, TableBody, TableRow, TableCell,
    TableContainer,
    Button,
    IconButton,
    Typography,

} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from 'next/link';


const menu = [
    { id: 1, name: "Cheese Burger", price: 3.00 },
    { id: 2, name: "French Fries", price: 2.00 },
    { id: 3, name: "Ice Cream", price: 2.50 },
    {
        id: 4,
        name: "Cheese Cake",
        price: 8.00
    },
    {
        id: 5,
        name: "Green Tea",
        price: 6.00
    },
    {
        id: 6,
        name: "Ice Chocolate",
        price: 1.50
    },
    {
        id: 7,
        name: "Lemon Tea",
        price: 1.70
    },
    {
        id: 8,
        name: "Avocado Juice",
        price: 2.80
    },
    {
        id: 9,
        name: "Spicy Burger",
        price: 2.80
    },
    {
        id: 10,
        name: "Cheese Sandwich",
        price: 7.09
    },
];

export default function HomePage() {
    // track counts per‐dish
    const [counts, setCounts] = useState(
        menu.reduce((acc, d) => ({ ...acc, [d.id]: 0 }), {})
    );
    const [showModal, setShowModal] = useState(false);
    // increment handler
    const addOne = id =>
        setCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));

    // decrement handler (floor at 0)
    const removeOne = id =>
        setCounts(prev => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));

    // build orders list
    const orders = menu
        .map(d => ({
            ...d,
            qty: counts[d.id],
            TotalAmount: counts[d.id] * d.price
        }))
        .filter(d => d.qty > 0);

    // grand total
    const grandTotal = orders
        .reduce((sum, d) => sum + d.TotalAmount, 0)
        .toFixed(2);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
                <Typography variant="h3" align="center" gutterBottom>
                    My Restaurant
                </Typography>

                {/* MENU */}
                <TableContainer sx={{ mb: 6 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {["Dish", "Price", "Piece", "Actions"].map(h => (
                                    <TableCell key={h} sx={{ fontWeight: 'bold', color: "goldenrod" }}>
                                        {h}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {menu.map(d => (
                                <TableRow key={d.id}>
                                    <TableCell>{d.name}</TableCell>
                                    <TableCell>${d.price.toFixed(2)}</TableCell>
                                    <TableCell>{counts[d.id]}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={() => removeOne(d.id)}
                                            disabled={counts[d.id] === 0}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton onClick={() => addOne(d.id)}>
                                            <AddIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* ORDER SUMMARY */}
                {orders.length > 0 && (
                    <>
                        <Typography variant="h4" gutterBottom>
                            Your Order
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {["Dish", "Price", "Piece", "Total Amount"].map(h => (
                                            <TableCell key={h} sx={{ fontWeight: 'bold', color: "goldenrod" }}>
                                                {h}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map(d => (
                                        <TableRow key={d.id}>
                                            <TableCell>{d.name}</TableCell>
                                            <TableCell>${d.price.toFixed(2)}</TableCell>
                                            <TableCell>{d.qty}</TableCell>
                                            <TableCell>${d.TotalAmount.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={3} align="right" sx={{ color: "goldenrod" }}>
                                            <strong>Total:</strong>
                                        </TableCell>
                                        <TableCell>
                                            <strong>${grandTotal}</strong>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* {orders.length > 0 && */}
                        <Button component={Link} sx={{ marginLeft: 30, color: "white", backgroundColor: "goldenrod", marginTop: 10, width: "180px", height: "60px", borderRadius: "10px" }} href='/menulistitem/orderbook/popoffmodal'
                            onClick={() => setShowModal(true)}>Need To Pay</Button>
                        {showModal && <Popoffmodal closeModal={closeModal} />}
                    </>
                )}
            </Box>
        </>
    );
}
