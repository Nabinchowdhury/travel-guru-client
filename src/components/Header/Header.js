import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Image } from 'react-bootstrap';
import logo from "../../images/logo.png"
import { destRouteContext } from '../Pages/layout/Main/Main';

const Header = () => {
    const { destinationId } = useContext(destRouteContext)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container >
                    <Link to="/" className='w-40 '><Image src={logo} className="bg-light py-2 px-3 rounded"></Image> </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='w-100 d-flex justify-content-end align-items-lg-center'>
                            <NavLink to={`/destination/${destinationId}`} className={({ isActive }) =>
                                isActive ? 'text-yellow-500 hover:text-yellow-500 text-decoration-none ms-lg-5 fw-semibold' : 'text-white text-decoration-none ms-lg-5 fw-semibold'
                            }>Destination</NavLink>
                            <NavLink to="/hotels" className={({ isActive }) =>
                                isActive ? 'text-yellow-500 hover:text-yellow-500 text-decoration-none ms-lg-5 fw-semibold' : 'text-white text-decoration-none ms-lg-5 fw-semibold'
                            }>Hotels</NavLink>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? 'text-yellow-500 hover:text-yellow-500 text-decoration-none ms-lg-5 fw-semibold' : 'text-white text-decoration-none ms-lg-5 fw-semibold'
                            }>About</NavLink>
                            <Link to="/login" className='ms-lg-5'><button className='btn btn-outline-warning px-3 fw-semibold'>Login</button> </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;


// 'text-decoration-none ms-lg-5'
