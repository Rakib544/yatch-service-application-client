import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';
import logo from '../../../../images/logo@2x.png'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const handleShowMenu = () => {
        setClicked(!clicked)
    }
    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">
                <img src={logo} alt="logo"/>
            </h1>
            <div className="menu-icon" onClick={handleShowMenu}><IconButton>{clicked ? <CloseIcon /> : <MenuIcon />}</IconButton></div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <div className="mt-3">
                                <li key={index}>
                                    <Link to={item.url} className={item.cName}>{item.title}</Link>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;