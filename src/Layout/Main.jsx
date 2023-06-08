import React from 'react';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;