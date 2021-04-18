import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../images/logo-camping-white.png';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';
import Order from './Order/Order';
import OrderList from './OrderList/OrderList';
import WriteReview from './WriteReview/WriteReview';
import './Admin.css';
import jwt_decode from "jwt-decode";
import BookingList from './BookingList/BookingList';
import AdminSideBar from './AdminSideBar/AdminSideBar';

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
        <>
            <Grid container className="admin-container" justify="center">
                <Grid item lg={2} md={2} xsm={12} xs={12} className="admin-left-sight">
                    <ul className="menu-container">
                        <Link to="/">
                            <img src={logo} alt="admin-logo" className="adminLogo" />
                        </Link>
                        <AdminSideBar isAdmin={isAdmin} url={url} />
                    </ul>
                </Grid>
                <Grid item lg={10} md={10} sm={12} xs={12} className="admin-right-sight">
                    <Switch>
                        <Route exact path={`${path}`}>
                            {
                                isAdmin.length
                                    ? <AddService />
                                    : <BookingList />
                            }
                        </Route>
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
        </>
    );
};

export default Admin;