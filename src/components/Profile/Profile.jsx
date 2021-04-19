import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://pbs.twimg.com/profile_images/1326745577384718337/r38JbvnH_400x400.jpg' alt='Profile'/>
        </div>
        <div>
            <div className={s.item}>
                My page
            </div>
            <div className="item">
                My posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    Blog 1
                </div>
                <div className="item">
                    Blog 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;