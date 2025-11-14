import React, { useRef } from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import { FaFilm } from 'react-icons/fa';

function NavbarPelis({ onBuscar }) {
    const inputRef = useRef();

    const manejarBusqueda = () => {
        const texto = inputRef.current.value;
        onBuscar(texto); // Enviar el texto al componente padre
    };

    return (

        <Navbar style={{ background: 'linear-gradient(90deg, #0d1117, #161b22)' }} variant="dark" className="shadow-sm" >
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="/" className="fw-bold text-info">
                    <FaFilm className="me-2" /> Catálogo React
                </Navbar.Brand>

                {/* Barra de búsqueda */}
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                    <Form.Control
                        type="search"
                        placeholder="Buscar película..."
                        className="me-2"
                        ref={inputRef}
                        onChange={manejarBusqueda}  // búsqueda automática
                    />
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavbarPelis;
