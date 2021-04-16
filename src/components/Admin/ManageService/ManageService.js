import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const ManageService = () => {
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
                                <TableCell align="right">{order.userEmail}</TableCell>
                                <TableCell align="center">{order.orderName}</TableCell>
                                <TableCell align="center">{order.paymentWith} Card</TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default ManageService;