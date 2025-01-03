import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom'

function UserProtectedWrapper({
    children
}) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    });
    return (
        <>
            {
                children
            }</>
    )
}

export default UserProtectedWrapper