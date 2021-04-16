import { FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/allOrderList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Grid container item lg={11} md={11} sm={12} xs={12} style={{ margin: '30px 10px' }}>
            <TableContainer component={Paper}>
                <Table style={{ minWidth: '450px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Service Name</TableCell>
                            <TableCell align="center">Pay With</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.orderName}>
                                <TableCell component="th" scope="row">
                                    {order.userName}
                                </TableCell>
                                <TableCell align="center">{order.userEmail}</TableCell>
                                <TableCell align="center">{order.orderName}</TableCell>
                                <TableCell align="center">{order.paymentWith} Card</TableCell>
                                <TableCell align="right">
                                    <FormControl variant="filled">
                                        <Select
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default OrderList;