import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BookingItem from '../Item/BookingItem';
import './AllBookings.css'

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://wicked-nightmare-49756.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    // Update Status
    const handleUpdateStatus = id => {
        const proceed = window.confirm('Are You Sure, You Want To Update');
        if (proceed) {
            const url = `https://wicked-nightmare-49756.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successfully');
                        // window.location.reload();
                    }
                })
        }
    }
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
            <div className="banner-booking banner-bs mb-5 text-center text-white">
                <h1>MANAGE ALL <span className="text-color fw-bold">BOOKINGS</span></h1>
                <h5>ONLY ADMIN CAN HANDEL THIS</h5>
            </div>
            <div className="container">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            bookings.map(booking => <BookingItem key={booking._id} booking={booking} handleDeletePackage={handleDeletePackage} handleUpdateStatus={handleUpdateStatus}></BookingItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AllBookings;