import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../App';

const BookingList = () => {
    const [loggedUser] = useContext(UserContext);
    const [bookingService, setBookingService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/usersOrders/${loggedUser.email}`)
        .then(res => res.json())
        .then(data => setBookingService(data))
    }, [loggedUser.email])
    console.log(bookingService)
    return (
        <div>
            
        </div>
    );
};

export default BookingList;