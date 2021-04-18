import React from 'react';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import { NavLink } from 'react-router-dom';

const AdminSideBar = ({ isAdmin, url }) => {
    return (
        <div className="mt-5">
            {
                isAdmin.length ? (
                    <div>
                        <li className="nev-items">
                            <ListIcon />
                            <NavLink className="menuLinks" to={`${url}/orderList`}> Order List</NavLink>
                        </li>
                        <li className="nev-items">
                            <AddIcon />
                            <NavLink className="menuLinks" to={`${url}/addService`}> Add Service</NavLink>
                        </li>
                        <li className="nev-items">
                            <PersonAddOutlinedIcon />
                            <NavLink className="menuLinks" to={`${url}/addAdmin`}> Add Admin</NavLink>
                        </li>
                        <li className="nev-items">
                            <AppsOutlinedIcon />
                            <NavLink className="menuLinks" to={`${url}/manageService`}> Manage Service</NavLink>
                        </li>
                    </div>


                ) : (
                    <div>
                        <li className="nev-items">
                            <ShoppingCartOutlinedIcon />
                            <NavLink className="menuLinks" to='/'> Book</NavLink>
                        </li>
                        <li className="nev-items">
                            <ListIcon />
                            <NavLink className="menuLinks" to={`${url}/bookingList`}> Booking List</NavLink>
                        </li>
                        <li className="nev-items">
                            <CommentOutlinedIcon />
                            <NavLink className="menuLinks" to={`${url}/review`}> Review</NavLink>
                        </li>
                    </div>
                )
            }
        </div>
    );
};

export default AdminSideBar;