import React from 'react';
import {useParams} from "react-router-dom";

const SingleCharacter = () => {
    const data = useParams()

    return (
        <div>
            {data.name}
        </div>
    );
};

export default SingleCharacter;