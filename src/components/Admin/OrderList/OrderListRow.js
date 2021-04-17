import { FormControl, MenuItem, Select, TableCell, TableRow } from '@material-ui/core';
import React, { useState } from 'react';

const OrderListRow = ({ order }) => {
    const [statusValue, setStatusValue] = useState(order.orderStatus)

    const handleChange = status => {
        setStatusValue(status)

        fetch('https://mysterious-earth-80571.herokuapp.com/update', {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: order._id, statusValue: status})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <TableRow key={order._id}>
            <TableCell component="th" scope="row">
                {order.userName}
            </TableCell>
            <TableCell align="center">{order.userEmail}</TableCell>
            <TableCell align="center">{order.orderName}</TableCell>
            <TableCell align="center">{order.paymentWith} Card</TableCell>
            <TableCell align="right">
                <FormControl variant="filled">
                    <Select
                        value={statusValue}
                        onChange={e => handleChange(e.target.value)}
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="onGoing">On Going</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
        </TableRow>
    );
};

export default OrderListRow;