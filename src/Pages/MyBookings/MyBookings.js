import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth/useAuth';
import MyBookingItem from '../Item/MyBookingItem';
import './MyBookings.css';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { allContext } = useAuth();
    const { user } = allContext;
    // console.log(user);

    useEffect(() => {
        fetch('https://wicked-nightmare-49756.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                const myBooking = data.filter(booking => booking.email === user.email);
                setBookings(myBooking)
            })
    }, [user.email])

    // Delete a Package
    const handleDeletePackage = id => {
        const proceed = window.confirm('Are You Sure, You Want To Cancel');
        if (proceed) {
            const url = `https://wicked-nightmare-49756.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Cancel Successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    };
                });
        };
    };
    return (
        <div>
            <div className="banner-myBooking banner-bs mb-5 text-center text-white">
                <h1>MY <span className="text-color fw-bold">BOOKINGS</span></h1>
                <h5>YOU CAN SEE DETAILS INFORMATION</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            bookings.map(booking => <MyBookingItem key={booking._id} booking={booking} handleDeletePackage={handleDeletePackage}></MyBookingItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;