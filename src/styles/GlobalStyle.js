import React from "react"
import {createGlobalStyle, css} from "styled-components";


const GlobalStyle = createGlobalStyle(css`

    body {
      font-family: 'Source Sans Pro', sans-serif;
      background: #F5F6FA;  
  }
  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
     display: flex;
       flex-direction: column;
       align-items: flex-start;
       padding: 40px 35px;      
 
       width: 340px;
    
       left: 550px;
       top: 213px;
       background: #FFFFFF;
       box-shadow: 0px 3px 12px rgba(29, 30, 38, 0.1), 0px 6px 18px rgba(29, 30, 38, 0.1);
  }
  
  .Toastify__toast-container {
    width: 551px;
    max-width: 100vw;
    
    .Toastify__toast {
      border-radius: 6px;
    }
    .Toastify__toast--error {
      background: #FADED9;
      border-left: 6px solid red;
      
    }
    .Toastify__toast--success {
      background: #EBF3D8;
      border-left: 6px solid #77B300;
    }
    .Toastify__toast--warning {
      background: #FFF2CC;
      border-left: 6px solid #FFC000;
    }
    //Toastify__toast Toastify__toast-theme--light Toastify__toast--error
    //Toastify__toast Toastify__toast-theme--light Toastify__toast--success
    //Toastify__toast Toastify__toast-theme--light Toastify__toast--warning

  }
  
    
`)

export default GlobalStyle;