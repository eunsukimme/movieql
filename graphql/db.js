export const people = [
    {
        id: 1,
        name: 'Eunsu Kim',
        age: 23,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Sanghoon Lee',
        age: 23,
        gender: 'male'
    },
    {
        id: 3,
        name: 'Yeyoung Yoon',
        age: 24,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Youngwoo Kim',
        age: 25,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Joungbin Park',
        age: 21,
        gender: 'female'
    },
];

export const getPersonById = (id) => {
    const filteredPerson = people.filter(person => person.id == id);
    console.log(filteredPerson);
    return filteredPerson[0];
}