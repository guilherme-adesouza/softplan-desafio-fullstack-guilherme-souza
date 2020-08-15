import {Route} from "react-router-dom";

import Login from "pages/public/Login";
import NotFound from "pages/public/NotFound";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default {component: Route, routes};
