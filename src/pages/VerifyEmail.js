import React, {useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {BASE_URL} from "../util/apis";
import {useNavigate} from "react-router-dom";

const VerifyEmail = () => {
    const [message, setMessage] = useState();
    const navigation = useNavigate();
    const params = useParams();
    const [verificationCode, setVerficationCode] = useState();

    const handleChange = (event) => {
        setVerficationCode(event.target.value);
    }

    const sendRequestToVerifyEmail = () => {
        axios.put(
            BASE_URL + "/user/api/v1/auth/" +
            params.id + "/verify?code=" + verificationCode
        ).then(res => {
            if(res.status === 200) {
                navigation("/home")
            }
        }).catch(err => {
            console.log(err)
            setMessage(err.response.data);
            console.log(err.response.data);
        })
    }

    return (
        <div>
            <input
                type="text"
                value={verificationCode}
                onChange={handleChange}
                required
            />
            <button onClick={sendRequestToVerifyEmail}>Verify</button>
            <p>{message}</p>
        </div>
    )
}

export default VerifyEmail;