import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrderItem from '../../Item/ManageOrderItem';
import './ManageAllOrders.css';
import { Box, CircularProgress } from '@mui/material';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://aqueous-stream-28542.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => setLoading(false));
    }, [orders])

    // Update Status
    const handleUpdateStatus = id => {
        const proceed = window.confirm('Are You Sure, You Want To Update');
        if (proceed) {
            const url = `https://aqueous-stream-28542.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Shipped' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successfully');
                    }
                })
        }
    }
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
            <div className="banner-order banner-bs mb-5 text-center text-white">
                <h1>MANAGE ALL <span className="text-color fw-bold">ORDERS</span></h1>
                <h5>ONLY ADMIN CAN HANDEL THIS</h5>
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
                                orders.map(order => <ManageOrderItem key={order._id} order={order} handleDeleteProduct={handleDeleteProduct} handleUpdateStatus={handleUpdateStatus}></ManageOrderItem>)
                            }
                        </Row>
                    </div>
                </div>}
        </div>
    );
};

export default ManageAllOrders;