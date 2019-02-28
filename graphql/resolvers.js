import { people, movies, getPersonById, getMovieById, addMovie, deleteMovie } from './db';

export const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getPersonById(id),
        movies: () => movies,
        movie: (_, { id }) => getMovieById(id)
    },
    Mutation: {
        addMovie: ( _, { name, score }) => addMovie(name, score), 
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
}