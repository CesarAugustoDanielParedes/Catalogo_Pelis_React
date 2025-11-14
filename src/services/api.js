
import axios from 'axios';

const API_KEY = '160a429480b7c3f8cb15c6a24bd96c14';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
return response.data.results;
};





