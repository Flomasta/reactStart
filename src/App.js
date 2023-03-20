import React, {useEffect, useMemo, useRef, useState} from "react";
import "../src/styles/app.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (

        <div className='container'>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>

    );
}

export default App;
