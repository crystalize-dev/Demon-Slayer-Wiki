import React from 'react';
import "./contentWrapper.css"

const ContentAreaWrapper = ({children}) => {
    return (
        <div className="contentArea">
            {children}
        </div>
    );
};

export default ContentAreaWrapper;