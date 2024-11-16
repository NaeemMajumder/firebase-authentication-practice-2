import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {

    let {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h1 className='text-5xl font-bold'> Profile</h1>
            <p>This is your profile</p>
        </div>
    );
};

export default Profile;