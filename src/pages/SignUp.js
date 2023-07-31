import React, {useState} from 'react';
import '../styles/sign-up.css';
import axios from "axios";
import {BASE_URL, SIGN_UP} from "../util/apis";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

const customToastStyles = {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
}
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState();
    // const [errorMessage, setErrorMessage] = useState();
    const navigation = useNavigate();


    const signUp = () => {
        axios.post(
            BASE_URL + SIGN_UP,
            {name, email, password}
        ).then(res => {
            if (res.data.id != null) {
                navigation("/verify-email/" + res.data.id);
            }
        }).catch(err => {
            toast.error(err.response.data, {
                className: "toast--error",
                // icon: ({theme, type}) =>  <img src={Vector_red} alt={"url"}/>,
                autoClose: false,
                toastClassName: "custom-toast",
                style: customToastStyles

            });
        })
    }

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    //
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-12">
                    <h1> Sign Up </h1>

                    <fieldset>
                        <input
                            className="user-input"
                            type="text"
                            id="name" name="user_name"
                            value={name}
                            placeholder="name"
                            onChange={handleNameChange}
                        />

                        <input
                            className="user-input"
                            type="email"
                            id="email"
                            value={email}
                            placeholder="email"
                            onChange={handleEmailChange}
                        />

                        <input
                            className="user-input"
                            type="password"
                            id="password"
                            value={password}
                            placeholder="password"
                            onChange={handlePasswordChange}
                        />
                        <input
                            className="user-input"
                            type="number"
                            value={age}
                            placeholder="age"
                            onChange={handleAgeChange}
                        />

                    </fieldset>
                    <button
                        className="user-button"
                        onClick={signUp}>Sign Up</button>

                </div>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default SignUp;