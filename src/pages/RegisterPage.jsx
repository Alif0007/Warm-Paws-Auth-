import React, { use } from 'react';
import  { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router';


const RegisterPage = () => {

    const {createUser} = use(AuthContext)

    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoUrl = form.url.value
        console.log(email,password,name,photoUrl)

        createUser(email,password)
        .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
    }




    return (
        <div>
            <div>
            <div className="hero bg-base-200 min-h-screen">
            
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    
    <div className=" card bg-base-100  w-full max-w-md shadow-2xl">
      <h1 className='text-3xl text-center py-4'> Register Form</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label  className="label ">Name</label>
          <input required name="name"  type="name" className="input w-full" placeholder="Name" />

           <label className="label ">Email</label>
          <input required name="email"  type="email" className="input w-full" placeholder="Email" />

          <label className="label ">Email</label>
          <input required name="url"  type="url" className="input w-full" placeholder="Photo URL" />

          <label className="label">Password</label>
          <input required name="password"  type="password" className="input w-full" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>

          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p className='text-center pb-5'>Already have an account, <NavLink to="/auth/login"><span className='font-bold text-blue-700'>Login</span> </NavLink> Here</p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default RegisterPage;