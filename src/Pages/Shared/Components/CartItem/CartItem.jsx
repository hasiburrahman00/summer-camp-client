import React from 'react';
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import UseCarts from '../../../../Hooks/UseCarts';

const CartItem = ({ cartItem, index }) => {

    const { courseImage, courseId, courseName, email, instructorName, instructorEmail, price, ratting, seat, _id } = cartItem;
    const [, refetch] = UseCarts();
    const handleDelete = item => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-error',
                cancelButton: 'btn  mx-4'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 700
                            }
                            )
                        }
                    })
            }
        })
    }


    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img className='w-full h-auto' src={courseImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{courseName}</div>
                        <button className=''>Available seat: {seat}</button>
                    </div>
                </div>
            </td>
            <td>
                {instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">{instructorEmail}</span>
            </td>
            <td>${price}</td>
            <th className=''>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-md"><BsTrash className='h-6 w-6' />  </button>
            </th>
        </tr>
    );
};

export default CartItem;