import { Grid, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App'
import jwt_decode from "jwt-decode";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentCart } from './PaymentCart';
import './Order.css'
const stripePromise = loadStripe('pk_test_51Ig0UgJGVGYGB4Cnu7o1bsmCeLLLnRCJL85Gkanxfmk6DFk91y6a3jP3E6eh9mI5bdYCtVQ3vuYMDaznhqDaZKn200jcUC5R6K');

const Order = () => {
    const [loggedUser] = useContext(UserContext)
    const [sessionStorageUserInfo, setSessionStorageUserInfo] = useState({});
    const { id } = useParams()
    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(() => {
        fetch(`https://mysterious-earth-80571.herokuapp.com/findSingleService/${id}`)
            .then(res => res.json())
            .then(data => setSelectedOrder(data))

        const token = sessionStorage.getItem('token');
        const decodeToken = jwt_decode(token);
        setSessionStorageUserInfo({ email: decodeToken.email, name: decodeToken.name })
    }, [id])

    const orderDetails = {
        fullOrder: { ...selectedOrder },
        orderStatus: 'pending',
        orderName: selectedOrder.serviceTitle,
        userEmail: loggedUser.email || sessionStorageUserInfo.email,
        userName: loggedUser.name || sessionStorageUserInfo.name,
    }

    return (
            <Grid container item lg={6} className="order-grid">
                <img src={selectedOrder.imageURL} alt={selectedOrder.serviceTitle} style={{ width: '100%' }} />
                <p className="service-title">{selectedOrder.serviceTitle}</p>
                <h3 className="service-price">Price: $ {selectedOrder.totalPrice}</h3>
                <TextField style={{margin: '10px 0'}} fullWidth value={loggedUser.name || sessionStorageUserInfo.name} label="User Name" variant="outlined" />
                <TextField fullWidth value={loggedUser.email || sessionStorageUserInfo.email} label="User Email" variant="outlined" />
                <div className="payment-card">
                    <Elements stripe={stripePromise}>
                        <PaymentCart orderDetails={orderDetails} />
                    </Elements>
                </div>
            </Grid>
    );
};

export default Order;