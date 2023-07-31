import React, {useState} from 'react';
import Welcome from "./Welcome";
import axios from "axios";

const Hello = (props) => {

    const [message, setMessage] = useState();

    const sendRequest = () => {
        axios.get(
            "http://localhost:8080/greet"
        ).then(res => {
            setMessage(res.data);
            console.log(res);
        });
    }

    return (
        <div>
            <h1>Hello {props.name}</h1>
            <Welcome name={props.name}/>
            <h1>{message}</h1>
            <button onClick={sendRequest}>Send Req</button>
        </div>
    );
}

export default Hello;