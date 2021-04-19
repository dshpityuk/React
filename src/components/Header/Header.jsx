import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2pdJahFp5HJT7hubjhPbR2fHoRA__tZhgg&usqp=CAU' alt='header'/>
        </header>
    )
}

export default Header;