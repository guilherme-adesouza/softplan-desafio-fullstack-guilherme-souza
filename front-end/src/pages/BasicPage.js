import React from "react";
import NavBar from "components/navbar/NavBar";

const BasicPage = (props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default BasicPage;
