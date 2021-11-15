import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts/useProducts';
import ManageProductItem from '../../Item/ManageProductItem';

const ManageProducts = () => {
    const { products, setProducts, loading } = useProducts();


    // Delete a Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure, You Want To Delete');
        if (proceed) {
            const url = `https://aqueous-stream-28542.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Delete Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    };
                });
        };
    };
    return (
        <div>
            <div className="banner-product banner-ps mb-5 text-center text-white">
                <h1>MANAGE <span className="text-color fw-bold">PRODUCTS</span></h1>
                <h5>ADMIN CAN HANDLE THIS</h5>
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
                                products.map(product => <ManageProductItem key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></ManageProductItem>)
                            }
                        </Row>
                    </div>
                </div>}
        </div>
    );
};

export default ManageProducts;