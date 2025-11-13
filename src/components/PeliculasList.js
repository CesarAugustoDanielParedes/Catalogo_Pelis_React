import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import PeliculaCard from './PeliculaCard';
import { getPopularMovies } from '../services/api';

function PeliculasList() {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPopularMovies().then(data => {
            setPeliculas(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

    return (
        <Row className="mt-4">
            {peliculas.map(pelicula => (
                <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3}>
                    <PeliculaCard pelicula={pelicula} />
                </Col>
            ))}
        </Row>
    );
}

export default PeliculasList;
