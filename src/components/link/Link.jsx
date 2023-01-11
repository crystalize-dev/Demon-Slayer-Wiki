import React from 'react';
import cl from "./Link.module.css"


const Link = ({children, href}) => {
    return (
        <a href={href} className={cl.link}>
            {children}
            <hr/>
        </a>
    );
};

export default Link;