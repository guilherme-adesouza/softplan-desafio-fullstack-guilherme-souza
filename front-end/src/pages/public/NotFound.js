import "pages/public/NotFound.css";
import React from "react";
import {Link, Redirect} from "react-router-dom";

const NotFoundPage = ({location}) => {
    if (location.pathname === '/') {
        return (
            <Redirect to={{pathname: '/login'}}/>
        )
    }
    return (
        <div className="NotFoundPage">
            <div>
                <div>
                    <p>Não encontramos nada para<code>{location.pathname}</code></p>
                    <p><Link to="/home">Clique aqui</Link> para voltar para a página inicial.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;