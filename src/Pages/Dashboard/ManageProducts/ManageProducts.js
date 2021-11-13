import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices/useServices';
import ManageProductItem from '../../Item/ManageProductItem';

const ManageProducts = () => {
    const { services, setServices } = useServices();


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
                        const remainingProducts = services.filter(service => service._id !== id);
                        setServices(remainingProducts);
                    };
                });
        };
    };
    return (
        <div>
            <div className="banner-service banner-ps mb-5 text-center text-white">
                <h1>MANAGE <span className="text-color fw-bold">PRODUCTS</span></h1>
                <h5>ADMIN CAN HANDLE THIS</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            services.map(service => <ManageProductItem key={service._id} service={service} handleDeleteProduct={handleDeleteProduct}></ManageProductItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;