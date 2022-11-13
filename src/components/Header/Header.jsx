import React from 'react';
import './Header.css'

const Header = ({ heading, details }) => {
    return (
        <div className="header-container">
            <h1>{heading}</h1>
            <p>{details}</p>
            <p> Find more on <a href="https://github.com/SoundaryaKhanapur" >
                   GitHub
                </a></p>
        </div>
    );
}

export default Header;