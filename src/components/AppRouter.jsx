import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import PostIdPages from "../pages/PostIdPages";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.element} exact={route.exact}/>
            )}
        </Routes>
    );
};

export default AppRouter;
