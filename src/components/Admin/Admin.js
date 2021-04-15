import { Grid } from '@material-ui/core';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../images/logo@2x.png';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';
import Order from './Order/Order';
import OrderList from './OrderList/OrderList';
import WriteReview from './WriteReview/WriteReview';

const Admin = () => {
    let { path, url } = useRouteMatch();
    return (
        <Grid container>
            <Grid item lg={3}>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <Link to={`${url}/book`}>Book</Link>
                    </li>
                    <li>
                        <Link to={`${url}/bookingList`}>Booking List</Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`}>Review</Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`}>Add Service</Link>
                    </li>
                    <li>
                        <Link to={`${url}/addAdmin`}>Add Admin</Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageService`}>Manage Service</Link>
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