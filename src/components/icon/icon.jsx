import React from 'react';
import "./icon.css"
import classNames from "classnames";

const Icon = ({children, ...props}) => {
    return (
        <span {...props} className={classNames("material-symbols-outlined", props.className)}>
            {children}
        </span>
    );
};

export default Icon;