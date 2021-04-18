import { Grid, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../images/logo@2x.png';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';
import Order from './Order/Order';
import OrderList from './OrderList/OrderList';
import WriteReview from './WriteReview/WriteReview';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import './Admin.css';
import jwt_decode from "jwt-decode";
import BookingList from './BookingList/BookingList';
import MenuIcon from '@material-ui/icons/Menu';

const Admin = () => {
    const [adminList, setAdminList] = useState([]);
    const [tokenInfo, setTokenInfo] = useState({})

    useEffect(() => {
        fetch('https://mysterious-earth-80571.herokuapp.com/allAdmins')
            .then(res => res.json())
            .then(data => setAdminList(data))
    }, [])

    let { path, url } = useRouteMatch();

    useEffect(() => {
        const currentUserToken = sessionStorage.getItem('token');
        const decodeToken = jwt_decode(currentUserToken)
        setTokenInfo(decodeToken)
    }, [adminList])

    const isAdmin = adminList.filter(admin => admin.email === tokenInfo.email)

    return (
        <Grid container>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px' }}>
                <Link to="/">
                    <img src={logo} alt="logo" className="adminLogo" />
                </Link>
                <IconButton><MenuIcon /></IconButton>
            </div>
            <Grid item lg={3}>
                    <ul className="menu-container">
                        {
                            isAdmin.length ? (
                                <div>
                                    <li className="nev-items">
                                        <ListIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/orderList`}> Order List</NavLink>
                                    </li>
                                    <li className="nev-items">
                                        <AddIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/addService`}> Add Service</NavLink>
                                    </li>
                                    <li className="nev-items">
                                        <PersonAddOutlinedIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/addAdmin`}> Add Admin</NavLink>
                                    </li>
                                    <li className="nev-items">
                                        <AppsOutlinedIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/manageService`}> Manage Service</NavLink>
                                    </li>
                                </div>


                            ) : (
                                <div>
                                    <li className="nev-items">
                                        <ShoppingCartOutlinedIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to='/'> Book</NavLink>
                                    </li>
                                    <li className="nev-items">
                                        <ListIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/bookingList`}> Booking List</NavLink>
                                    </li>
                                    <li className="nev-items">
                                        <CommentOutlinedIcon />
                                        <NavLink activeStyle={{ color: 'red' }} className="menuLinks" to={`${url}/review`}> Review</NavLink>
                                    </li>
                                </div>
                            )
                        }
                    </ul>
            </Grid>
            <Grid item lg={9} md={9}>
                <Switch>
                    <Route path={`${path}/book/:id`}>
                        <Order />
                    </Route>
                    <Route path={`${path}/bookingList`}>
                        <BookingList />
                    </Route>
                    <Route path={`${path}/review`}>
                        <WriteReview />
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService />
                    </Route>
                    <Route path={`${path}/addAdmin`}>
                        <AddAdmin />
                    </Route>
                    <Route path={`${path}/manageService`}>
                        <ManageService />
                    </Route>
                    <Route path={`${path}/orderList`}>
                        <OrderList />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
};

export default Admin;