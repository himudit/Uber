import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            // If no token exists, redirect to login immediately
            navigate('/login');
            return;
        }

        // Make logout request
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    // Clear the token and redirect to login
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            })
            .catch((err) => {
                console.error('Logout failed:', err);
                // Handle error (optional): show an alert, redirect, etc.
                navigate('/login');
            });
    }, [navigate]);

    return <div>Logging you out...</div>;
}

export default UserLogout;
