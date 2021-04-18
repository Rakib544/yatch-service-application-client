import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../App';
import BookingCart from './BookingCart';

const BookingList = () => {
    const [loggedUser] = useContext(UserContext);
    const [bookingService, setBookingService] = useState([]);

    useEffect(() => {
        fetch(`https://mysterious-earth-80571.herokuapp.com/usersOrders/${loggedUser.email}`)
        .then(res => res.json())
        .then(data => setBookingService(data))
    }, [loggedUser.email])
    
    return (
        <Grid container>
            {
                bookingService.map(booking => <BookingCart key={booking._id} booking ={booking} />)
            }
        </Grid>
    );
};

export default BookingList;