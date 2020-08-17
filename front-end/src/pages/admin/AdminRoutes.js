import {AdminRoute} from "router/Route";
import UserFormPage from "pages/admin/UserFormPage";
import ListUserPage from "pages/admin/ListUserPage";

const routes = [
    {
        path: '/admin/user/form/:id',
        breadcrumbTitle: 'Edição de Usuário',
        component: UserFormPage,
    },
    {
        path: '/admin/user/form/',
        breadcrumbTitle: 'Criação de Usuário',
        component: UserFormPage,
    },
    {
        path: '/admin/user',
        exact: true,
        breadcrumbTitle: 'Lista de Usuários',
        component: ListUserPage,
    },
];

export default {component: AdminRoute, routes};
