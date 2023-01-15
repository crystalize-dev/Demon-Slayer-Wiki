import React from 'react';
import cl from "./Link.module.css"
import {Link} from "react-router-dom"


const MyLink = ({children, to}) => {
    return (
        <Link to={to} className={cl.link}>
            {children}
            <hr/>
        </Link>
    );
};

export default MyLink;