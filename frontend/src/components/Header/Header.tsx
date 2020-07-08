import React from 'react';

import logo from './logo.jpg';
import './Header.css';

export const Header = () =>
    <header>
        <div className="container">
            <img src={logo} alt="Logo of Application" className="logo"/>
        </div>
    </header>