import React, { use } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Navbar = () => {
    const links = <>
        <NavLink to="/"><li className='mx-2 text-lg'>Home</li></NavLink>
        <NavLink to="/service"><li className='mx-2 text-lg'>Service</li></NavLink>
        <NavLink to="/myprofile"><li className='mx-2 text-lg'>My Profile</li></NavLink>
        <NavLink to="/blogs"><li className='mx-2 text-lg'>Blogs</li></NavLink>

    </>
    const {user,signOutUser,setUser} = use(AuthContext)
    

    
    const handleSignOut = ()=>{
       signOutUser()
            .then(() => {
            
            toast.success('Logged Out Succesfully')
            setUser(null)
            }).catch((error) => {
            console.log(error)
            }); 
    }

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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-11 mt-3 w-52 p-2 shadow">
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
                user ? <div className='flex items-center gap-4'>
              <div className='flex flex-col items-center'>
                  <img
                    src={user.photoURL ? user.photoURL : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full  border border-orange-300 shadow-md "
                    />
                    <p>{user.displayName}</p>
              </div>
                <Link to="/auth/login"><div onClick={handleSignOut} className="btn bg-red-600 text-white">Log Out</div> </Link>
                </div> :
                <Link to="/auth/login"><div className="btn bg-blue-600 text-white">Login</div> </Link>
            }
        </div>
        </div>
        <Toaster />
        </div>
    );
};

export default Navbar;