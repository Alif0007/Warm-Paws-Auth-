import React from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';

const MyProfile = () => {
    const {user} = use(AuthContext)
    console.log(user)
    
    return (
        <div>
           {user.name}
        </div>
    );
};

export default MyProfile;