import React from 'react';
import errorPage from '../../assets/Images/error_page.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='h-screen text-center'>
            <img className='w-1/3 mx-auto' src={errorPage} alt="" />
            <button onClick={handleBack} className='btn btn-warning font-bold mt-12 w-40'>Go Back </button>
        </div>
    );
};

export default ErrorPage;