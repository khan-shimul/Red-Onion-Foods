import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="150"
                            // height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home"><i className="fas fa-shopping-cart text-dark"></i></Nav.Link>
                        {
                            !user && <Nav.Link as={Link} to="/login" className="text-dark login">Login</Nav.Link>
                        }
                        {
                            !user ? <Nav.Link as={Link} to="/signup">
                                <button className="btn-sign-up">Sign Up</button>
                            </Nav.Link>
                                :
                                <button onClick={logOut} className="btn-sign-up">Log out</button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;