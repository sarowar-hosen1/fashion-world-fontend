import React from 'react';
import { Redirect, Route } from "react-router-dom"
import { Auth } from '../../Auth/Auth';

const PrivateRoute = ({ children, ...rest }) => {
    const auth = Auth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.userInfo ? (
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