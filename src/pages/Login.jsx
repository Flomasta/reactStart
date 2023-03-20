import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')

    }
    return (
        <div>
            <h1>Login page</h1>
            <form action="" onSubmit={login}>
                <MyInput type='text' placeholder="Login"></MyInput>
                <MyInput type='text' placeholder="Password"></MyInput>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;
