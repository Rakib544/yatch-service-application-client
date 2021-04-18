import { Button, Grid } from '@material-ui/core';
import React from 'react';
import './BookingCard.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const BookingCart = ({ booking }) => {
    const { fullOrder, orderStatus } = booking;
    const { description, imageURL, location, serviceTitle, totalPrice } = fullOrder;
    return (
        <Grid item lg={3} md={3} sm={5} xs={12} className="booking-grid">
            <div className="booking-container">
                <button className="statusButton">{orderStatus}</button>
                <img src={imageURL} alt={serviceTitle} className="booking-card-img" />
                <h2 className="card-title">{serviceTitle}</h2>
                <div>
                    <Button startIcon={<LocationOnOutlinedIcon className="service-icon" />}><small className="location">{location}</small></Button>
                </div>
                <h3 className="price">$ {totalPrice}</h3>
                <p className="blog-description">{description.toString().slice(0,50)}...</p>
            </div>
        </Grid>
    );
};

export default BookingCart;