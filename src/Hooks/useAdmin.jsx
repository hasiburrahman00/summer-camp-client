import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: isAdmin, isLoading: isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user?.email}`);
            return response.data.admin;
        }
    })
    return [isAdmin, isLoading]

};

export default useAdmin;