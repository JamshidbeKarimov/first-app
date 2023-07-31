import React, {useState} from 'react';

const ConditionalRendering = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);


    const handleLogInLogOut = () => {
        setLoggedIn(!isLoggedIn);
    }


    if(isLoggedIn) {
        return (
            <div>
                <h1>Welcome G22</h1>
                <button onClick={handleLogInLogOut}>Logout</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Welcome Guest</h1>
                <button onClick={handleLogInLogOut}>Login</button>
            </div>
        )
    }
}

export default ConditionalRendering;