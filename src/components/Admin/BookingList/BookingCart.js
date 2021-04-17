import { Button, Grid } from '@material-ui/core';
import React from 'react';

const BookingCart = ({ booking }) => {
    const { fullOrder, orderStatus } = booking;
    const { description, imageURL, serviceTitle, totalPrice } = fullOrder;
    return (
        <Grid item lg={4}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={imageURL} alt={serviceTitle} style={{ height: '60px' }} />
                <div>
                    <Button variant="outlined" color="secondary">{orderStatus}</Button>
                </div>
            </div>
            <h2>{serviceTitle}</h2>
            <h3>$ {totalPrice}</h3>
            <p>{description}</p>
        </Grid>
    );
};

export default BookingCart;