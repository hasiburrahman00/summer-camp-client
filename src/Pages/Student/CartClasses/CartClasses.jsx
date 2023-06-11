import React from 'react';
import UseCarts from '../../../Hooks/UseCarts';
import CartItem from '../../Shared/Components/CartItem/CartItem';

const CartClasses = () => {
    const [cart] = UseCarts();
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    const { courseId, courseName, email, instructorName,instructorEmail, price, ratting, seat, _id } = cart;

    return (
        <div className='bg-slate-100 p-12 my-12 rounded-lg w-10/12 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold mb-4  uppercase'>Total Order: {cart.length} </h2>
                <div className='flex space-x-5'>
                    <h2 className='text-lg font-bold text-red-400 uppercase'>Total Price : ${totalPrice}</h2>
                    <button className='btn btn-warning btn-sm '>Pay Now </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-slate-300 text-black font-bold text-lg rounded-xl'>
                        <tr>
                            <th>
                                <label>
                                    <h2>#</h2>
                                </label>
                            </th>
                            <th>Course</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((cartItem, index) => <CartItem
                                key={cartItem._id}
                                cartItem={cartItem}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartClasses;