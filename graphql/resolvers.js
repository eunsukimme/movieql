import { people, getPersonById } from './db';

export const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getPersonById(id)
    }
}