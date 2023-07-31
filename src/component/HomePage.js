import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/global-style.css"
const HomePage = () => {
    const navigation = useNavigate();

    const handleInputClick = () => {
        navigation('/input')
    }

    return (
      <div>
          <button className="blue-button" onClick={handleInputClick}>
              Input
          </button>
          <br/>
          <button>
              Hello
          </button>
          <br/>
          <button>
              Welcome
          </button>
      </div>
    );
}

export default HomePage;