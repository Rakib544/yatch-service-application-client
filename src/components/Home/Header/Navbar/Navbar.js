import React from 'react';
import { MenuItems } from './MenuItems';

const Navbar = () => {
    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">
                logo
            </h1>
            <div className="menu-icon">Mobile menu</div>
            <ul>
                {
                    MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName}>{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;