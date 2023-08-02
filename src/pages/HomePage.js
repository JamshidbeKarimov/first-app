import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/global-style.css";
import styled from "styled-components";
import menuIcon from '../images/icons8-menu.svg';
import cancelIcon from '../images/icons8-cancel.svg';
import SideBar from "../component/SideBar";


const HomePage = () => {


    return (
        <React.Fragment>
            <SideBar/>
            <div style={{marginLeft: "300px"}}>Home</div>
        </React.Fragment>
    );
}

export default HomePage;
