import React, {useEffect, useState} from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";

//import Api from 'service/Api';
import BasicPage from "pages/BasicPage";
import { ROLES } from './Role';

export const PrivateComponent = ({
                                     role = ROLES.VIEWER,
                                     Component,
                                     ...props
                                 }) => {

    const [state, setState] = useState({loading: true, isLogged: true, isAuthenticated: false,});

    useEffect(() => {
        const doAuthenticate = async () => {
            try {
                // const {user} = await Api.Taskflow.User.verifyAuth();
                const isAuthenticated = true;
                setState({
                    loading: false,
                    isLogged: true,//!!user,
                    isAuthenticated,
                });
            } catch (e) {
                console.error(e);
                alert(e);
                setState({loading: false});
            }
        };
        doAuthenticate();
    }, [role]);

    if (state.loading) {
        return <span>Loading...</span>;
    } else {
        return (
            <React.Fragment>
                {!state.isAuthenticated ?
                    <Redirect to={{pathname: '/login'}}/> :
                    <BasicPage {...props}>
                        <Component {...props} />
                    </BasicPage>
                }
            </React.Fragment>
        )
    }
};

export function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (<PrivateComponent Component={Component} {...props}/>)}/>
    )
}

export function AdminRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={props => (<PrivateComponent Component={Component} role={ROLES.SUPER} {...props}/>)}/>
    )
}
