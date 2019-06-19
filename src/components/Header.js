import React, { Component } from 'react';
import logo from '../logo.jpg';
import './Header.css';

export default class Header extends Component{
    render() {
        return (
            <header>
                <div className="container">
                    <img src={logo} className="logo"/>
                </div>
            </header>
        );
    }
}