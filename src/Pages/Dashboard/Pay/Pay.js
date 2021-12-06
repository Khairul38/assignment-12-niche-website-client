import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JwpyXE9bvNoZqGxSOyaUnwGRJuOid2B0ySrIvEmebeRKlByun2uAzwXjwfVFENz4gIzUUVmmrUPblloT3kaaVjQ00FTLDjV15')

const Pay = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://aqueous-stream-28542.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId])
    return (
        <div style={{ marginTop: '200px', marginBottom: '200px', textAlign: 'center' }}>
            <h1>PAYMENT SYSTEM</h1>
            <h4>User Name: {order.name}</h4>
            <h4>User Email: {order.email}</h4>
            <h4>Total Payment: ${order?.product?.price}</h4>
            {order?.product?.price && <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>}
        </div>
    );
};

export default Pay;

/*
1. install stripe and stripe-react
2. set publishable key
3. elements
4. checkout form
----------
5. create payment method
6. server create payment Intent api
7. load client secret
8. Confirm payment
9. handle user error
*/