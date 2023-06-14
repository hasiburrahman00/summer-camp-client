import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: isInstructor, isLoading: isLoading } = useQuery({
        queryKey: ['inInstructor', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return response.data.instructor;
        }
    })
    return [isInstructor, isLoading]

};

export default useInstructor;