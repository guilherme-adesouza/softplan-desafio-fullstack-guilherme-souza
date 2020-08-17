import React, { useEffect } from "react";

import Api from "service/Api";
import {useParams} from "react-router-dom";

import {yup} from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";

const STATUS = [
    {label: 'Aberto', value: 'OP'},
    {label: 'Em andamento', value: 'EX'},
    {label: 'Finalizado', value: 'CL'},
]

const TaskSchema = yup(yup => {
    return yup.object().shape({
        title: yup.string().required().default(''),
        description: yup.string().required().default(''),
        status: yup.string().required().oneOf(STATUS).default('OP'),
    })
});

const TaskForm = ({id, updateData}) => {
    const formRef = React.useRef();
    const fetchTask = async () => {
        try {
            const task = await Api.Taskflow.Task.getOne(id);
            formRef.current.resetForm({values: task});
        } catch(e) {
            UiMsg.error({message: 'Ocorreu um erro ao tentar editar o processo', error: e});
        }
    }

    useEffect(() => {
        if (!!formRef && !!id) fetchTask();
    }, [id]);

    const editTask = async (values, actions) => {
        try {
            await Api.Taskflow.Task.update(id, values);
            UiMsg.success({message: `Processo salvo com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: `Falhar ao editar processo`, error: e});
        }

        actions.resetForm();
        updateData();
    };

    const createTask = async (values, actions) => {
        try {
            await Api.Taskflow.Task.create(values);
            UiMsg.success({message: `Processo criado com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: `Falhar ao criar processo`, error: e});
        }

        actions.resetForm();
        updateData();
    };

    return (
        <div className="valign-wrapper row">
            <Form innerRef={formRef}
                  initialValues={TaskSchema.default()}
                  onSubmit={!!id ? editTask :  createTask}>
                <div className="card-content">
                    <span className="card-title center-align">Cadastro de Processos</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Título" type="text" name="title" required/>
                        </div>
                        <div className="col s12">
                            <Field title="Descrição" type="textarea" name="description" required/>
                        </div>
                        <div className="col s12">
                            <Field title="Status" 
                                   emptyOption={false}
                                   options={STATUS}
                                   type="select"
                                   name="status" 
                                   required/>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <FormButton type="submit">Salvar</FormButton>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const CreateTaskPage = (props) => {
    const {id} = useParams();
    return (
        <div>
            <TaskForm id={id} />
        </div>
    )
};

export default CreateTaskPage;
