import React from "react";
import NavBar from "components/navbar/NavBar";
import Breadcrumb from "components/commons/Breadcrumb";

const BasicPage = (props) => {
    return (
        <div>
            <header>
                <NavBar {...props}/>
            </header>
            <main>
                <Breadcrumb />
                {props.children}
            </main>
        </div>
    )
};

export default BasicPage;
