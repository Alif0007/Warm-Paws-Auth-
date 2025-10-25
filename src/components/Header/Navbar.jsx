import React, { use } from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const links = <>
        <NavLink to="/"><li className='mx-2 text-lg'>Home</li></NavLink>
        <NavLink to="/service"><li className='mx-2 text-lg'>Service</li></NavLink>
        <NavLink to="/myprofile"><li className='mx-2 text-lg'>My Profile</li></NavLink>
        <NavLink to="/blogs"><li className='mx-2 text-lg'>Blogs</li></NavLink>

    </>
    const {user} = use(AuthContext)

    return (
        <div>
            <div className="navbar bg-[#fff1c2] shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <img className='h-12' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
           {links}
            </ul>
        </div>
        <div className="navbar-end">
            
            {
                user ? <a className="btn bg-red-600 text-white">Log Out</a> :
                <a className="btn bg-blue-500 text-white">Login</a>
            }
        </div>
        </div>
        </div>
    );
};

export default Navbar;