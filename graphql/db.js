import axios from 'axios';
const BASE_URL = 'https://yts.am/api/v2';
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (_limit, _rating) => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL,{
        params: {
            limit: _limit,
            minimum_rating: _rating
        }
    });
    return movies;
};

export const getMovie = async (id) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async (_id) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: _id
        }
    });
    return movies;
};