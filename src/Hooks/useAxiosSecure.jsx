import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        })

        axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                console.log(error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )


    }, [logout, navigate, axiosSecure])
    return axiosSecure;
};

export default useAxiosSecure;