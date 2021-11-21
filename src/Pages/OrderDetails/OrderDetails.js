import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth/useAuth';
import './OrderDetails.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const OrderDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { orderId } = useParams();
    const { products, allContext } = useAuth();
    const { user, ColorButton } = allContext;
    const history = useHistory();

    const orderData = products.find(product => product._id === orderId);

    const onSubmit = data => {
        data.product = orderData;
        data.status = 'Pending';

        axios.post('https://aqueous-stream-28542.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Processed Successfully');
                    reset();
                    history.push('/dashboard/myOrders');
                }
            })
    };
    return (
        <div>
            <Header></Header>
            <div className="container my-5 row mx-auto align-items-center">
                <div className="col-lg-8">
                    <img className="w-100" src={orderData?.img} alt="" />
                    <h1 className=" fw-bold text-color mt-3">{orderData?.name}</h1>
                    <p>{orderData?.description}</p>
                    <h4><span className="text-color">${orderData?.price}</span></h4>
                </div>
                <div className="col-lg-4 text-center place-order">
                    <h1>Buy This Product</h1>
                    <p>Please provide us valid information here</p>
                    <form className="order-form d-block" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true })} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                        <ColorButton sx={{ width: '100%', mt: 2 }}
                            type="submit"
                            variant="contained">PLACE ORDER</ColorButton>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderDetails;