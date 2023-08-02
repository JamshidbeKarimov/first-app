import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Input from "./Input";
import Hello from "./Hello";
import Welcome from "./Welcome";
import HomePage from "../pages/HomePage";
import VerifyEmail from "../pages/VerifyEmail";
import SignUp from "../pages/SignUp";
import Roles from "../pages/Roles";

const RouterComponent = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/input" element={<Input/>}/>
                <Route path="/hello" element={<Hello/>}/>
                <Route path="/roles" element={<Roles/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/verify-email/:id" element={<VerifyEmail/>}/>
            </Routes>
        </Router>
    );
}

export default RouterComponent;