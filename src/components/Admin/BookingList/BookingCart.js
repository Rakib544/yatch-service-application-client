import { Button, Grid } from '@material-ui/core';
import React from 'react';
import './BookingCard.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const BookingCart = ({ booking }) => {
    const { fullOrder, orderStatus } = booking;
    const { description, imageURL, location, serviceTitle, totalPrice } = fullOrder;
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <div className="booking-container">
                {
                    orderStatus === 'done' && <button className="statusButton green">{orderStatus}</button>
                }
                {
                    orderStatus === 'pending' && <button className="statusButton red">{orderStatus}</button>
                }
                {
                    orderStatus === 'onGoing' && <button className="statusButton blue">{orderStatus}</button>
                }
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