import React from 'react';
import "./icon.css"

const Icon = ({children}) => {
    return (
        <span className="material-symbols-outlined">
            {children}
        </span>
    );
};

export default Icon;