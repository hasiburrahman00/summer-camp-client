import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';


const UseCarts = () => {
    const { user } = useContext(AuthContext);
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json();
        },

    })
    return [cart, refetch]

};

export default UseCarts;