import "components/navbar/SideBar.css";
import React, {useRef} from "react";
import {Link} from "react-router-dom";
import Icon from "components/commons/Icon";

const ADMIN_SIDE_LINKS = {
    description: "Administrador",
    links: {
        "CREATE_USERS": {
            label: "Criar Usuários",
            link: "/admin/user/create"
        },
    },
};

const SIDE_LINKS = [
    {links: ADMIN_SIDE_LINKS, roles: ['SUPER', 'ADMIN']}
];

const SideBar = (props) => {
    const sidenav = useRef(null);

    const renderLink = (idx, sideLink) => {
        return (
            <li key={idx}>
                <Link to={sideLink.link}>
                    {sideLink.label}
                </Link>
            </li>
        )
    };

    return (
        <>
            <ul id="slide-out" className="sidenav" ref={sidenav}>
                {SIDE_LINKS.map((sl, idx) => {
                    if (sl.admin) return null;
                    const sideNav = sl.links;
                    return (
                        <div key={idx}>
                            {idx !== 0 && <li><div className="divider"/></li>}
                            <li>
                                <span className="subheader">{sideNav.description}</span>
                            </li>
                            {Object.values(sideNav.links).map((sideLink, idx) => {
                                return renderLink(idx, sideLink)
                            })}
                        </div>
                    )
                })}
            </ul>
        </>
    )
};

export default SideBar;
