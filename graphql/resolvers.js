const eunsu = {
    name: 'Eunsu Kim',
    age: 23,
    gender: 'male'
}

export const resolvers = {
    Query: {
        person: () => eunsu
    }
}