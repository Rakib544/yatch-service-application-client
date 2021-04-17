import { Button, Grid } from '@material-ui/core';
import React from 'react';
import './BookingCard.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const BookingCart = ({ booking }) => {
    const { fullOrder, orderStatus } = booking;
    const { description, imageURL, location, serviceTitle, totalPrice } = fullOrder;
    return (
        <Grid item lg={6} md={6} sm={6} xs={12} className="booking-grid">
            <div className="booking-container">
                <Button variant="outlined" color="secondary" className="statusButton">{orderStatus}</Button>
                <img src={imageURL} alt={serviceTitle} className="booking-card-img" />
                <h2 className="card-title">{serviceTitle}</h2>
                <div>
                        <Button startIcon={<LocationOnOutlinedIcon className="service-icon" />}><small className="location">{location}</small></Button>
                    </div>
                <h3 className="price">$ {totalPrice}</h3>
                <p className="blog-description">{description}</p>
            </div>
        </Grid>
    );
};

export default BookingCart;