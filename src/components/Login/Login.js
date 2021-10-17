import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Login = () => {
    const { handleEmailChange, handlePasswordChange, processSignInEmailPass, signInUsingGoogle, error } = useAuth();

    return (
        <section className="login-section">
            <div className="d-flex justify-content-center align-items-center">
                <div className="mt-5">
                    <div className="text-center"><img src={logo} width="220" alt="" /></div>
                    <Form onSubmit={processSignInEmailPass} className="mt-4 login-form w-100">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </Form.Group>
                        <button className="w-100 py-2 btn-login mb-2" type="submit">
                            Sign In
                        </button>
                    </Form>
                    <div className="text-center">
                        <Link to="/signup" className="already-exist primary text-center">New to Red Onion? Create Account</Link>
                    </div>
                    <div className="or-sign-in text-center">
                        <h5>or</h5>
                        <Button onClick={signInUsingGoogle} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;