import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';
import './Order.css'

export const PaymentCart = ({ orderDetails }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message)
      setSuccess(null)
    } else {
      setSuccess('Payment Successfully done')
      setError(null)
      const paymentId = paymentMethod.id;
      const paymentWith = paymentMethod.card.brand;
      const finalOrderInfo = {...orderDetails, paymentId, paymentWith}

      fetch('https://mysterious-earth-80571.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(finalOrderInfo)
      })
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button variant="contained" color="primary" style={{margin: '10px 0'}} type="submit" disabled={!stripe}>
        Pay
      </Button>
      <p className="success">{success}</p>
      <p className="error">{error}</p>
    </form>
  );
};