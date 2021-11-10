import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth/useAuth';
import './BookingDetails.css';

const BookingDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { bookingId } = useParams();
    const { services, allContext } = useAuth();
    const { user } = allContext;
    const history = useHistory();

    const bookingData = services.find(service => service._id === bookingId);

    const onSubmit = data => {
        data.package = bookingData;
        data.status = 'Pending';

        axios.post('https://wicked-nightmare-49756.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Processed Successfully');
                    reset();
                    history.push('/myBookings');
                }
            })
    };
    return (
        <div className="">
            <div className="container my-5 row mx-auto align-items-center">
                <div className="col-lg-8">
                    <img className="w-100" src={bookingData?.img} alt="" />
                    <h1 className=" fw-bold text-color mt-3">{bookingData?.name}</h1>
                    <p>{bookingData?.description}</p>
                    <h4><span className="text-color">${bookingData?.price}</span>/Person</h4>
                </div>
                <div className="col-lg-4 text-center place-booking">
                    <h1>Book This Tour</h1>
                    <p>Arrange your trip in advance - book this tour now!</p>
                    <form className="booking-form d-block" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true })} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                        <button className="btn btn-primary" type="submit">Place Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;