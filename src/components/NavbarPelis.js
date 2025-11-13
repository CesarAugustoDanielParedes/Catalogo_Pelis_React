import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaFilm } from 'react-icons/fa';

function NavbarPelis() {
    return (
        <Navbar style={{ background: 'linear-gradient(90deg, #0d1117, #161b22)' }} variant="dark" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/" className="fw-bold text-info">
                    <FaFilm className="me-2" /> Catálogo React
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarPelis;

