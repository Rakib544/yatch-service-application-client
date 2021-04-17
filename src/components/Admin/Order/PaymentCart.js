import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export const PaymentCart = ({ orderDetails }) => {
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
      console.log('[error]', error);
    } else {
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};