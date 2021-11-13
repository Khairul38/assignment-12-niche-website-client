import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Review = () => {
    const { allContext } = useAuth();
    const { user } = allContext;


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.img = user.photoURL;
        axios.post('https://aqueous-stream-28542.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="banner-addProduct banner-as add-products text-center">
            <h1 className="text-white">PROVIDE YOUR VALUABLE REVIEW</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <textarea className="massage" {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating must 1--5" />
                <Button sx={{ width: '200%', mt: 3 }}
                    type="submit"
                    variant="contained">SUBMIT</Button>
            </form>
        </div>
    );
};

export default Review;