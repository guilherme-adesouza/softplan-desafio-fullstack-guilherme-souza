import React, { useEffect, useState } from "react";

import Api from "service/Api";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";
import UiMsg from "components/commons/UiMsg";
import Button from "components/commons/Button";

const UserTable = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const _users = await Api.Taskflow.User.getAll();
        setUsers(_users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const actions = [
        {
            description: "Editar", 
            icon: "edit", 
            onClick: (user) => {
                window.location = `/admin/user/form/${user.id}`;
            },
        },
        {
            description: "Excluir", 
            icon: "delete_outline",
            onClick: (user) => {
                ModalConfirm(`Você deseja excluir o usuário ${user.name}?`, async () => {
                    try {
                        await Api.Taskflow.User.delete(user.id);
                        await fetchUsers();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir usuário', error: e});
                    }
                })
            },
        },
    ]

    return (
        <div className="UserTable">
            <TableCRUD data={users} actions={actions} header={['ID', 'Nome', 'E-mail', 'Perfil']}/>
        </div>
    )

}

const ListUserPage = (props) => {

    const createUser = () => {
        window.location = `/admin/user/form/`;
    }

    return (
        <div className="ListUserPage">
            <UserTable />
            <Button onClick={createUser}>
                Criar Usuário
            </Button>
        </div>
    )
};

export default ListUserPage;