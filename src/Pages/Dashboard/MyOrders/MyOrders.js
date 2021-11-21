import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth/useAuth';
import MyOrderItem from '../../Item/MyOrderItem';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { allContext } = useAuth();
    const { user } = allContext;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://aqueous-stream-28542.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(order => order.email === user.email);
                setOrders(myOrder)
            })
            .finally(() => setLoading(false));
    }, [user.email])

    // Delete a Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure, You Want To Cancel');
        if (proceed) {
            const url = `https://aqueous-stream-28542.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Cancel Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    };
                });
        };
    };
    return (
        <div>
            <div className="banner-myOrder banner-bs mb-5 text-center">
                <h1>MY <span className="text-color fw-bold">ORDERS</span></h1>
                <h5>YOU CAN SEE DETAILS INFORMATION</h5>
            </div>
            {loading ?
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                    <CircularProgress sx={{ color: '#EC9C31' }} />
                </Box>
                :
                <div className="container">
                    <div className="container my-5">
                        <Row xs={1} md={3} className="g-5 p-4">
                            {
                                orders.map(order => <MyOrderItem key={order._id} order={order} handleDeleteProduct={handleDeleteProduct}></MyOrderItem>)
                            }
                        </Row>
                    </div>
                </div>}
        </div>
    );
};

export default MyOrders;