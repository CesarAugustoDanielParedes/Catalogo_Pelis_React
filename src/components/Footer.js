import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="mt-5 py-4 text-center text-light" style={{ backgroundColor: '#0d1117' }}>
            <Container>
                <p className="mb-1">
                    Catalogo de Pelis usando API por <span className="fw-bold">Paredes P. César Augusto Daniel</span>
                </p>
                <a href="https://github.com/CesarAugustoDanielParedes/Catalogo_Pelis_React/tree/main" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                    <FaGithub className="me-1" /> Ver en GitHub
                </a>
            </Container>
        </footer>
    );
}

export default Footer;
