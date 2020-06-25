import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

export const Header = () => (
    <header>
        <div className="container">
            <img src={logo} className="logo"/>
        </div>
    </header>
);