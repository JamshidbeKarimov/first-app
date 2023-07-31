import React, {useState} from 'react';
import Hello from "./Hello";


const Input = () => {
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleButtonClick = () => {
        setMessage('Hello ' + inputValue);
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Submit</button>
            <h1>{message}</h1>
        </div>
    );
}

export default Input;