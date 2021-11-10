import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://wicked-nightmare-49756.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="banner-addPackage banner-as add-packages text-center">
            <h1 className="text-white">Please Add New Package</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="massage" {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="Image URL" />
                <input className="btn btn-primary mt-4" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;