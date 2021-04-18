import React from 'react';
import './Profile.css';

const Profile = () => {
    return <div className='content'>
        <div>
            <img src='https://pbs.twimg.com/profile_images/1326745577384718337/r38JbvnH_400x400.jpg' alt='Profile'/>
        </div>
        <div>
            <div>
                <button><a href='#'>My page</a></button>
            </div>
            <div>
                <button><a href='#'>My posts</a></button>
            </div>
            <div>
                <button><a href='#'>New posts</a></button>
            </div>
            <div>
                <button><a href='#'>Blog 1</a></button>
            </div>
            <div>
                <button><a href='#'>Blog 2</a></button>
            </div>
        </div>
    </div>

}

export default Profile;