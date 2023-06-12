import React, { Children } from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import CartClasses from '../Pages/Student/CartClasses/CartClasses';
import MyClasses from '../Pages/Student/MyClasses/MyClasses';
import PaymentHistory from '../Pages/Student/PaymentHistory/PaymentHistory';
import Courses from '../Pages/Courses/Courses';
import AddCourse from '../Pages/Admin/AddCourse';
import AdminHome from '../Pages/Admin/AdminHome';
import ManageCourse from '../Pages/Admin/ManageCourse';
import ManageUsers from '../Pages/Admin/ManageUsers';
import Instructors from '../Pages/Instructors/Instructors';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses', 
                element: <Courses></Courses>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cartClasses',
                element: <CartClasses></CartClasses>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'addCourse', 
                element: <AddCourse></AddCourse>
            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'manageCourses',
                element: <ManageCourse></ManageCourse>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])

export default router;