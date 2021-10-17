import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../../images/logo2.png';

const SignUp = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, error, signInUsingGoogle } = useAuth();

    return (
        <div>
            <section className="login-section">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mt-5">
                        <div className="text-center"><img src={logo} width="220" alt="" /></div>
                        <Form onSubmit={handleRegistration} className="mt-4 login-form w-100">
                            <Form.Group className="mb-3">
                                <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <button className="w-100 py-2 btn-login mb-2" type="submit">
                                Sign Up
                            </button>
                        </Form>
                        <div className="text-center">
                            <Link to="/login" className="already-exist primary text-center">Already have an account?</Link>
                        </div>
                        <div className="or-sign-in text-center">
                            <h5>or</h5>
                            <Button onClick={signInUsingGoogle} className="rounded-3 btn-danger"><i className="fab fa-google"></i> Google Sign In</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;