import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import Input from "./component/Input";
import RouterComponent from "./component/RouterComponent";
import Counter from "./component/Counter";
import List from "./component/List";
import ConditionalRendering from "./component/ConditionalRendering";
import SignUp from "./pages/SignUp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterComponent/>
        {/*<Counter/>*/}
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/*<List/>*/}
        {/*<ConditionalRendering/>*/}
        {/*<SignUp/>*/}
        {/*<Hello/>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
