import React from 'react';
import Header from "../components/header/Header";
import {Outlet} from "react-router-dom";
import ContentAreaWrapper from "../components/contentWapper/contentAreaWrapper";

const Layout = ({header, setHeader}) => {
    return (
        <>
            <Header header={header} setHeader={setHeader} onClick={(e) => e.stopPropagation()}/>

            <ContentAreaWrapper>
                <Outlet />
            </ContentAreaWrapper>
        </>
    );
};

export default Layout;