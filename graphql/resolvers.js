import { getMovies, getMovie } from './db';

export const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id)
    }
}