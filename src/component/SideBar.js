import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/global-style.css";
import styled from "styled-components";
import menuIcon from '../images/icons8-menu.svg';
import cancelIcon from '../images/icons8-cancel.svg';

const Style = styled.div`
  .sidebar-container {
    border: #8a97a0;
    background-color: #61dafb;
    width: 10%;
    height: 100vh;
  }

  .menu-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;


const SideBar = () => {

    const [isMenuOpen, setMenuOpen] = useState();
    const navigation = useNavigate();

    const navigateUser = (path) => {
        navigation(path);
    }


    return (
        <Style>
            {isMenuOpen ? (
                <div className="sidebar-container">
                    <img
                        src={cancelIcon} alt={"cancel"}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        style={{
                            width: '20px',
                            height: '20px',
                            position: 'absolute',
                            top: '10px',
                            cursor: 'pointer',
                            left: '120px'
                        }}
                    />
                    <button
                        className="blue-button"
                        onClick={() => navigateUser("/roles")}
                    >
                        Roles
                    </button>
                    <br/>
                    <button
                        className="blue-button"
                        onClick={() => navigateUser("/users")}
                    >
                        Users
                    </button>
                    <br/>
                    <button>
                        Welcome
                    </button>
                </div>
            ) : (
                <img
                    className="menu-icon"
                    src={menuIcon}
                    alt={"Side Menu"}
                    onClick={() => setMenuOpen(!isMenuOpen)}
                />
            )}
        </Style>
    );
}


export default SideBar;