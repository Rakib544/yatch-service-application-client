import { Grid } from '@material-ui/core';
import React from 'react';
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

const Admin = () => {
    let { path, url } = useRouteMatch();
    return (
        <Grid container>
            <Grid item lg={3}>
                <img src={logo} alt="logo" className="adminLogo" />
                <ul className="menu-container">
                    <li className="nev-items">
                        <ShoppingCartOutlinedIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/book`}> Book</NavLink>
                    </li>
                    <li className="nev-items">
                        <ListIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/bookingList`}> Booking List</NavLink>
                    </li>
                    <li className="nev-items">
                        <CommentOutlinedIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/review`}> Review</NavLink>
                    </li>
                    <li className="nev-items">
                        <AddIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/addService`}> Add Service</NavLink>
                    </li>
                    <li className="nev-items">
                        <PersonAddOutlinedIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/addAdmin`}> Add Admin</NavLink>
                    </li>
                    <li className="nev-items">
                        <AppsOutlinedIcon />
                        <NavLink activeStyle={{color: 'red'}} className="menuLinks" to={`${url}/manageService`}> Manage Service</NavLink>
                    </li>
                </ul>
            </Grid>
            <Grid item lg={9}>
                <Switch>
                    <Route path={`${path}/book`}>
                        <Order />
                    </Route>
                    <Route path={`${path}/bookingList`}>
                        <OrderList />
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
                </Switch>
            </Grid>
        </Grid>
    );
};

export default Admin;