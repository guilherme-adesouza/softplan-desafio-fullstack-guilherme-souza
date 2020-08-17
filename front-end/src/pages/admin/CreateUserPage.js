import React, { useEffect } from "react";

import Api from "service/Api";
import {useParams} from "react-router-dom";

import {yup} from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";

const ROLES = [
    {label: 'Administrador', value: 'SUPER'},
    {label: 'Triador', value: 'TRIATOR'},
    {label: 'Finalizador', value: 'FINISHER'},
]


const UserSchema = yup(yup => {
    return yup.object().shape({
        name: yup.string().required().default(''),
        email: yup.string().required().default(''),
        role: yup.string().required().oneOf(ROLES).default('TRIATOR'),
        password: yup.string().required().default(''),
    })
});

const UserForm = ({id, updateData}) => {
    const formRef = React.useRef();
    const fetchUser = async () => {
        try {
            const user = await Api.Taskflow.User.getOne(id);
            formRef.current.resetForm({values: user});
        } catch(e) {
            UiMsg.error({message: 'Ocorreu um erro ao tentar editar o usuário', error: e});
        }
    }

    useEffect(() => {
        if (!!formRef && !!id) fetchUser();
    }, [id]);

    const editUser = async (values, actions) => {
        try {
            await Api.Taskflow.User.update(id, values);
            UiMsg.success({message: `Usuário salvo com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: `Falhar ao editar usuário`, error: e});
        }

        actions.resetForm();
        updateData();
    };

    const createUser = async (values, actions) => {
        try {
            await Api.Taskflow.User.create(values);
            UiMsg.success({message: `Usuário criado com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: `Falhar ao criar usuário`, error: e});
        }

        actions.resetForm();
        updateData();
    };

    return (
        <div className="valign-wrapper row">
            <Form innerRef={formRef}
                  initialValues={UserSchema.default()}
                  onSubmit={!!id ? editUser :  createUser}>
                <div className="card-content">
                    <span className="card-title center-align">Cadastro de Usuários</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Nome" type="text" name="name" required/>
                        </div>
                        <div className="col s12">
                            <Field title="E-mail" type="text" name="email" required/>
                        </div>
                        <div className="col s12">
                            <Field title="Perfil" 
                                   emptyOption={false}
                                   options={ROLES}
                                   type="select"
                                   name="role" 
                                   required/>
                        </div>
                        <div className="col s12">
                            <Field title="Senha" type="password" name="password" required/>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <FormButton type="submit">{!!id ? 'Editar' : 'Criar'} Usuário</FormButton>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const CreateUserPage = (props) => {
    const {id} = useParams();
    return (
        <div>
            <UserForm id={id} />
        </div>
    )
};

export default CreateUserPage;
