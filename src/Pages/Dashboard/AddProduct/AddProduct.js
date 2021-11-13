import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://aqueous-stream-28542.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="banner-addPackage banner-as add-packages text-center">
            <h1 className="text-white">Please Add New Product</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
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