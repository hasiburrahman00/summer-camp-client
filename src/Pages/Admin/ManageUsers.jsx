import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = (userId) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${userId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })



    }


    return (
        <div className='bg-slate-100 w-10/12 p-12 rounded-lg'>
            <h2 className='uppercase font-bold text-2xl '>Total Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #NO
                                </label>
                            </th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <button className='btn btn-xs btn-warning mx-2'>Instructor</button>
                                        <button className='btn btn-xs mx-2 btn-success'>Admin</button>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="btn text-black font-bold btn-sm btn-error"><BsTrash3 className='h-8' /></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;