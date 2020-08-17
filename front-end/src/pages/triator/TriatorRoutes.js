import {PrivateRoute} from 'router/Route';

import TaskFormPage from 'pages/triator/TaskFormPage';
import ListTaskPage from 'pages/triator/ListTaskPage';

const routes = [
    {
        path: '/task/form/:id',
        breadcrumbTitle: 'Edição de Processo',
        component: TaskFormPage,
    },
    {
        path: '/task/form/',
        breadcrumbTitle: 'Criação de Processo',
        component: TaskFormPage,
    },
    {
        path: '/task',
        exact: true,
        breadcrumbTitle: 'Lista de Processos',
        component: ListTaskPage,
    },
];

export default {component: PrivateRoute, routes};
