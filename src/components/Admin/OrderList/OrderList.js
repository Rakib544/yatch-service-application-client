import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import OrderListRow from './OrderListRow';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://mysterious-earth-80571.herokuapp.com/allOrderList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Grid container item lg={12} md={12} sm={12} xs={12} style={{padding: '10px'}}>
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
                        {orders.map((order, index) => <OrderListRow key={index} order={order} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default OrderList;