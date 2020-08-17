import {PrivateRoute} from 'router/Route';

import HomePage from 'pages/private/HomePage';

const routes = [
    {
        path: '/home',
        component: HomePage
    }
];

export default {component: PrivateRoute, routes};
