import React from "react";

import Api from "service/Api";

import {yup} from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";


const UserSchema = yup(yup => {
    return yup.object().shape({
        nome: yup.string().required().default(''),
        email: yup.string().required().default(''),
        senha: yup.string().required().default(''),
    })
});

const UserForm = ({updateData, formRef}) => {

    const createUser = async (values, actions) => {
        try {
            await Api.Taskflow.User.create(values);
            UiMsg.success({message: `Usuário ${values.nome} criado com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: 'Falhar ao criar usuário', error: e});
        }

        actions.resetForm();
        updateData();
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                initialValues={UserSchema.default()}
                  onSubmit={createUser}>
                <div className="card-content">
                    <span className="card-title center-align">Cadastro de Usuários</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Nome" type="text" name="nome" required/>
                        </div>
                        <div className="col s12">
                            <Field title="E-mail" type="text" name="email" required/>
                        </div>
                        <div className="col s12">
                            <Field title="Senha" type="password" name="senha" required/>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <FormButton type="submit">Criar Usuário</FormButton>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const CreateUserPage = (props) => {
    const formRef = React.useRef();

    return (
        <React.Fragment>
            <div>
                <UserForm formRef={formRef}/>
            </div>
        </React.Fragment>
    )
};

export default CreateUserPage;
