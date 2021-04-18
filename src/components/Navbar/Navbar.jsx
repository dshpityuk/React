import React from "react";
import './Navbar.css';

const Navbar = () => {
    return <nav className='nav'>
        <div className="item">
            <button className='butter'><a href='#'>Profile</a></button>
        </div>
        <div className='item'>
            <button><a href='#'>Messages</a></button>
        </div>
        <div className='item'>
            <button><a href='#'>News</a></button>
        </div>
        <div className='item'>
            <button><a href='#'>Music</a></button>
        </div>
        <div className='item'>
            <button><a href='#'>Settings</a></button>
        </div>
    </nav>

}

export default Navbar;