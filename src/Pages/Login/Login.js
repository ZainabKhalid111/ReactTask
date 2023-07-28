import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        let refreshToken = "RGFhci05MUAxMjM0OlBhc3M3NkBAJiY="
        try {
            const response = await axios.post('https://daarconn-dev.alarkan.com/Account/validatelogin', {

                "UserName ": username,
                "Password": password

            }, {
                headers: {
                    // authorization
                    "Authorization": "Bearer " + refreshToken,

                }
            }
            );


            const { token } = response?.data?.token;
            sessionStorage.setItem('token', token); // store the token in session storage to use it later on the reservation page
            console.log(response.data);

            navigate('/form')
        } catch (error) {
            toast.error('Invalid credentials. Please try again.', { position: 'top-right' });
            console.log(error)


        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={handleLogin} className="card login-card" id='form'>
                        <div className="card-body ">
                            <div className='d-flex flex-column align-items-center'>  <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" className='w-50 h-50 ' />
                                <h5 className='text-center'>Business Portal</h5>
                                <h4 className="card-title text-center py-3">Member Login</h4></div>

                            <div className="form-group">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                            <div className="form-group">

                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />

                            </div>

                            <button type='submit' className="btn btn-block login-button fw-bold">
                                Login
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
