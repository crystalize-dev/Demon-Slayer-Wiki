import React from 'react';
import cl from "./MyInput.module.css";


const MyInput = ({placeholder, ...props}) => {
    return (
        <div className={cl.wrapper}>
            <input {...props}/>

            <p>{placeholder}</p>

            <hr/>
        </div>
    );
};

export default MyInput;