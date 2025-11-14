import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import PeliculaCard from './PeliculaCard';
import { getPopularMovies } from '../services/api';

function PeliculasList( {filtro}) { //Usa el filtro
    const [peliculas, setPeliculas] = useState([]); //Guarda las peliculas
    const [loading, setLoading] = useState(true);   //Un estado de carga

    useEffect(() => {
        getPopularMovies().then(data => {   //Llama a la API
            setPeliculas(data);             //Guarda los datos de la peli 
            setLoading(false);
        });
    }, []); 

    if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

        // Filtrar películas según el filtro recibido
    const peliculasFiltradas = peliculas.filter(p =>
        p?.title?.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <Row className="mt-4">
            {peliculasFiltradas.map(pelicula => (
                <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3}>
                    <PeliculaCard pelicula={pelicula} />
                </Col>
            ))}
        </Row>
    );
}

export default PeliculasList;
