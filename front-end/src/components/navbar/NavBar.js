import "components/navbar/NavBar.css";
import React from "react";
//import SideBar from "components/navbar/SideBar";

const NavBarContainer = (props) => {
    return <NavBar/>
};

const NavBar = ({
                    items = [],
                }) => {
    return (
        <nav className="main-nav">
            <div className="nav-wrapper">
                {/* <SideBar /> */}
            </div>
        </nav>
    )
};

export default NavBarContainer;
