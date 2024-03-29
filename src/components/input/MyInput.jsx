import React from 'react';
import cl from "./MyInput.module.css";


const MyInput = ({placeholder, ...props}) => {
    return (
        <div className={cl.wrapper}>
            <input {...props}/>

            <p>{placeholder}</p>
        </div>
    );
};

export default MyInput;