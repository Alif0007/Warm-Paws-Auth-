import React from 'react';
import Navbar from '../components/Header/Navbar';   
import { Outlet } from 'react-router';
import Footer from '../components/Header/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;