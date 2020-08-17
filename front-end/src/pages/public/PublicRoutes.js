import {Route} from "react-router-dom";

import Login from "pages/public/Login";
import Logout from "pages/public/Logout";
import Home from "pages/public/Home";
import NotFound from "pages/public/NotFound";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default {component: Route, routes};
