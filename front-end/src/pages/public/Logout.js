import React from "react";
import { Redirect } from "react-router-dom";
import Api from "service/Api";

const Logout = () => {

    Api.Taskflow.User.logout();

    return (
        <Redirect to="/"/>
    )
}

export default Logout;