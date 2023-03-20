import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading, setIsAuth} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
    }
    return (
        <Routes>
            {isAuth ? (
                // Заключаем приватные маршруты в круглые скобки
                privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.path}/>
                )
            ) : (
                // Заключаем публичные маршруты в круглые скобки
                publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.path}/>
                )
            )}
            {!isAuth && <Route path="*" element={<Navigate to="/login"/>}/>}
            {isAuth && <Route path="/login" element={<Navigate to="/posts"/>}/>}
        </Routes>
    );
};

export default AppRouter;
