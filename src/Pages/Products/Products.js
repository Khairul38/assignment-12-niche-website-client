import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductItem from '../Item/ProductItem';
import './Products.css';

const Products = () => {
    const { products, loading } = useProducts();
    return (
        <div>
            <Header></Header>
            <div className="banner-product banner-ps mb-5 text-center text-white">
                <h1>MOST POPULAR <span className="text-color fw-bold">PRODUCTS</span></h1>
                <h5>SELECT THE BEST PRODUCT FOR YOU</h5>
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
                                products.map(product => <ProductItem key={product._id} product={product}></ProductItem>)
                            }
                        </Row>
                    </div>
                </div>}
            <Footer></Footer>
        </div>
    );
};

export default Products;