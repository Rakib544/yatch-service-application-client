import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../App';
import BookingCart from './BookingCart';
import jwt_decode from "jwt-decode";

const BookingList = () => {
    const [loggedUser] = useContext(UserContext);
    const [bookingService, setBookingService] = useState([]);

    useEffect(() => {
        const currentUserToken = sessionStorage.getItem('token');
        const decodeToken = jwt_decode(currentUserToken) 
        fetch(`https://mysterious-earth-80571.herokuapp.com/usersOrders/${loggedUser?.email || decodeToken.email}`)
        .then(res => res.json())
        .then(data => setBookingService(data))
    }, [loggedUser.email])
    
    return (
        <Grid container>
            {
                bookingService && bookingService.map(booking => <BookingCart key={booking._id} booking ={booking} />)
            }
        </Grid>
    );
};

export default BookingList;