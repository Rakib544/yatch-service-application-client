import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedUser] = useContext(UserContext)
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedUser?.email || isLoggedIn()) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;