import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const navigate = useNavigate()
    const locaion = useLocation();
    const from = locaion?.state?.from?.pathname || '/';

    const { SingInGoogle } = useContext(AuthContext)
    const handleLoginWithGoogle = () => {
        SingInGoogle()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }
                fetch('https://summer-camp-server-topaz.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Account create Successfully done ',
                                showConfirmButton: false,
                                timer: 1500

                            })
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
            })
    }




    return (
        <div className='mt-4'>
            <button onClick={handleLoginWithGoogle} className='btn  w-full '> <FcGoogle className='h-6 w-6' />Sign up using Google</button>
        </div>
    );
};

export default SocialLogin;