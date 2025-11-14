import React from 'react';
import PeliculasList from '../components/PeliculasList';
import { Container } from 'react-bootstrap';
import { FaFilm } from 'react-icons/fa';

function Home({ filtro }) {   // ← RECIBE EL FILTRO
    return (
        <Container>
            <h1 className="text-center mt-4 mb-4 text-primary fw-bold">
                <FaFilm className="me-2" />
                Catálogo de Películas
            </h1>

            <PeliculasList filtro={filtro} />   {/* ← LO ENVÍA A LA LISTA */}
        </Container>
    );
}

export default Home;