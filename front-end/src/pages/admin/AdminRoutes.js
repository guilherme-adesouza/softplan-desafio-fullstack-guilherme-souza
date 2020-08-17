import {AdminRoute} from "router/Route";
import CreateUser from "pages/admin/CreateUserPage";
import ListUserPage from "pages/admin/ListUserPage";

const routes = [
    {
        path: '/admin/user/form/:id',
        breadcrumbTitle: 'Edição de Usuário',
        component: CreateUser,
    },
    {
        path: '/admin/user/form/',
        breadcrumbTitle: 'Criação de Usuário',
        component: CreateUser,
    },
    {
        path: '/admin/user',
        exact: true,
        breadcrumbTitle: 'Lista de Usuários',
        component: ListUserPage,
    },
];

export default {component: AdminRoute, routes};
