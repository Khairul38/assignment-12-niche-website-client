import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://aqueous-stream-28542.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Make Admin Successfully');
                    setEmail('');
                }
            })
        e.preventDefault()
    }
    return (
        <div style={{marginTop: '280px', marginBottom: '280px'}} className="text-center">
            <h1 className="mb-5">Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    id="standard-basic"
                    label="Email"
                    onChange={handleOnChange}
                    type="email"
                    value={email}
                    autoComplete="email" variant="standard" />
                <Button type="submit" variant="contained">MAKE ADMIN</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;