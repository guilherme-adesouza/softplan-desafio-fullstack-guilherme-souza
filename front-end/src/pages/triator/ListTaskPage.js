import React, { useEffect, useState } from "react";

import Api from "service/Api";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";
import UiMsg from "components/commons/UiMsg";
import Button from "components/commons/Button";

const TaskTable = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const _tasks = await Api.Taskflow.Task.getAll();
        setTasks(_tasks);
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    const actions = [
        {
            description: "Editar", 
            icon: "edit", 
            onClick: (task) => {
                window.location = `/task/form/${task.id}`;
            },
        },
        {
            description: "Excluir", 
            icon: "delete_outline",
            onClick: (task) => {
                ModalConfirm(`Você deseja excluir o processo ${task.title}?`, async () => {
                    try {
                        await Api.Taskflow.Task.delete(task.id);
                        await fetchTasks();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o processo', error: e});
                    }
                })
            },
        },
        // {
        //     description: "Atribuir Usuário", 
        //     icon: "person", 
        //     onClick: async (task) => {
        //         const email = prompt('Informe o e-mail do usuário a ser adicionado');
        //         try {
        //             await Api.Taskflow.UserTask.addUser({email, taskId: task.id});
        //         } catch (e) {
        //             UiMsg.error({message: 'Ocorreu um erro ao tentar adicionar o usuário', error: e});
        //         }
        //     },
        // },
    ]

    return (
        <div className="TaskTable">
            <TableCRUD data={tasks} actions={actions} header={['ID', 'Título', 'Descrição', 'Status']}/>
        </div>
    )

}

const ListTaskPage = (props) => {

    const createTask = () => {
        window.location = `/task/form/`;
    }

    return (
        <div className="ListTaskPage">
            <TaskTable />
            <Button onClick={createTask}>
                Criar Processo
            </Button>
        </div>
    )
};

export default ListTaskPage;