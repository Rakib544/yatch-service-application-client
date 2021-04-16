import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/allOrderList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table style={{minWidth: '450px'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Pay With</TableCell>
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
                                <TableCell align="right">{order.orderName}</TableCell>
                                <TableCell align="right">{order.paymentWith} Card</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;