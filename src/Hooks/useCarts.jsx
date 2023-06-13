import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const UseCarts = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const axiousSecure = useAxiosSecure();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await axiousSecure(`/carts?email=${user?.email}`)
            return response.data;
        },

    })
    return [cart, refetch]

};

export default UseCarts;