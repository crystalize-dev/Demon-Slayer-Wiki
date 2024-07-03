import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ header, setHeader }) => {
    return (
        <>
            <Header
                header={header}
                setHeader={setHeader}
                onClick={(e) => e.stopPropagation()}
            />

            <Outlet />
        </>
    );
};

export default Layout;
