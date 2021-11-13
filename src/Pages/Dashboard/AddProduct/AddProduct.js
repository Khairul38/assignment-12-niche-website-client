import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Are You Sure, You Want To Add Product');
        if (proceed) {
            axios.post('https://aqueous-stream-28542.herokuapp.com/products', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Product Successfully Added');
                        reset();
                    }
                })
        }
    };
    return (
        <div className="banner-addProduct banner-as add-products text-center">
            <h1>Please Add New Product</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <textarea className="massage" {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="Image URL" />

                <Button sx={{ width: '200%', mt: 3 }}
                    type="submit"
                    variant="contained">ADD PRODUCT</Button>
            </form>
        </div>
    );
};

export default AddProduct;