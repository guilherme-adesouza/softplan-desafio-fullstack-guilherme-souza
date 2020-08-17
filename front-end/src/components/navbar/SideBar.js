import "components/navbar/SideBar.css";
import React, {useRef} from "react";
import {Link} from "react-router-dom";

const SIDE_LINKS = [
    {
        label: "Usuários",
        link: "/admin/user/"
    },
    {
        label: "Processos",
        link: "/task/"
    },
];

const SideBar = (props) => {
    const sidenav = useRef(null);

    return (
        <>
            <ul id="slide-out" className="sidenav" ref={sidenav}>
                {SIDE_LINKS.map((sideLink, idx) => {
                    return (
                        <li key={idx}>
                            <Link to={sideLink.link}>
                                {sideLink.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Link to="/logout">
                    Sair
                </Link>
            </div>
        </>
    )
};

export default SideBar;
