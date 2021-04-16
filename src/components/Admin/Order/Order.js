import { TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App'
import jwt_decode from "jwt-decode";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentCart } from './PaymentCart';
const stripePromise = loadStripe('pk_test_51Ig0UgJGVGYGB4Cnu7o1bsmCeLLLnRCJL85Gkanxfmk6DFk91y6a3jP3E6eh9mI5bdYCtVQ3vuYMDaznhqDaZKn200jcUC5R6K');

const Order = () => {
    const [loggedUser] = useContext(UserContext)
    const [sessionStorageUserInfo, setSessionStorageUserInfo] = useState({});
    const { id } = useParams()
    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8081/findSingleService/${id}`)
            .then(res => res.json())
            .then(data => setSelectedOrder(data))

        const token = sessionStorage.getItem('token');
        const decodeToken = jwt_decode(token);
        setSessionStorageUserInfo({ email: decodeToken.email, name: decodeToken.name })
    }, [id])

    const orderDetails = {
        fullOrder: {...selectedOrder},
        orderStatus: 'pending',
        orderName: selectedOrder.serviceTitle,
        userEmail: loggedUser.email || sessionStorageUserInfo.email,
        userName: loggedUser.name || sessionStorageUserInfo.name,
     }

    return (
        <div>

            <TextField value={loggedUser.name || sessionStorageUserInfo.name} label="Standard" variant="outlined" />
            <TextField value={loggedUser.email || sessionStorageUserInfo.email} label="Standard" variant="outlined" />
            <TextField value={selectedOrder.serviceTitle}  variant="outlined" />

            <div>
                <Elements stripe={stripePromise}>
                    <PaymentCart orderDetails={orderDetails} />
                </Elements>
            </div>
        </div>
    );
};

export default Order;