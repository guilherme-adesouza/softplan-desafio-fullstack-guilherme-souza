import React from "react";
import NavBar from "components/navbar/NavBar";

const BasicPage = (props) => {
    return (
        <div>
            <header>
                <NavBar {...props}/>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default BasicPage;
