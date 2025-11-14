import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';

function PeliculaCard({ pelicula }) { //Recibe el Objeto de PeliculasList
    return (
        <Card className="mb-4 shadow-sm border-0 rounded-4 bg-light">
            <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} //Imagen de la pelicula, utiliza la ruta 
                alt={pelicula.title}
                className="rounded-top-4"
            />
            <Card.Body>
                
                <Card.Title className="fw-bold">{pelicula.title}</Card.Title> {/* Nombre de la pelicula */}
                <Card.Text className="text-muted"> 
                    <FaStar className="text-warning me-1" /> {pelicula.vote_average.toFixed(1)} / 10<br /> {/*Calificacion de la pelicula*/}
                    <FaCalendarAlt className="text-primary me-1" /> {pelicula.release_date} {/*Fecha de estreno de la pelicula*/}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PeliculaCard;

