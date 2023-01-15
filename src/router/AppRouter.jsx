import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import Layout from "../pages/Layout";
import Characters from "../pages/Characters/Characters";
import Description from "../pages/Description/Description";
import SingleCharacter from "../pages/Characters/singleCharacter/singleCharacter";

const AppRouter = ({header, setHeader}) => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout header={header} setHeader={setHeader}/>}>
            <Route index element={<Description />} />
            <Route path="Characters" element={<Characters />} />
            <Route path="Characters/:name" element={<SingleCharacter />} />
            <Route path="About" element={<div>sdfgsdfgsdf</div>} />
            <Route path="Quotes" element={<div></div>} />
        </Route>
    ));

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default AppRouter;