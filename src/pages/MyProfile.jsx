import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
updateProfile

const MyProfile = () => {
    const{user} = use(AuthContext)
    const [updating,setUpdating] = useState(false)

  

  const handleUpdateProfile = () => {
    setUpdating(true)
    
  };

  
  const updateProfileForm =(e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const photoUrl = e.target.url.value
    const profile = {
    displayName : name,
    photoURL : photoUrl
  }
  console.log (user)

    updateProfile(user,profile).then(() => {
                // Profile updated!
                // ...
                setUpdating(false)
                console.log("done")
              }).catch((error) => {
                console.log(error)
              
              });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-orange-100 via-yellow-50 to-white p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center border border-orange-200">
       { updating ?

       <div>
        <form onSubmit={updateProfileForm}>
            <label  className="label ">Name</label>
          <input required name="name"  type="name" className="input w-full" placeholder="Name" />
          
        <label className="label ">Photo URL</label>
          <input required name="url"  type="url" className="input w-full" placeholder="Photo URL" />

        <button
          type="submit"
          className="mt-5 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200"
        >Save</button>

        </form>
       </div>

        :
       <div>
         {/* Profile Image */}
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-orange-300 shadow-md mb-4"
        />

        {/* User Info */}
        <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
        <p className="text-gray-600 mb-6">{user.email}</p>

        {/* Update Profile Button */}
        <button
          onClick={handleUpdateProfile}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 cursor-pointer"
        >
          Update Profile
        </button>
       </div>}
      </div>
    </div>
  );
};

export default MyProfile;
