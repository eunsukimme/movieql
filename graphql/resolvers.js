import { getMovies } from './db';

export const resolvers = {
    Query: {
        //people: () => people,
        //person: (_, { id }) => getPersonById(id),
        movies: () => getMovies()
        //movie: (_, { id }) => getMovieById(id)
    },
    /*Mutation: {
        //addMovie: ( _, { name, score }) => addMovie(name, score), 
        //deleteMovie: (_, { id }) => deleteMovie(id)
    }*/
}