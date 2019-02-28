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

export const movies = [
    {
        id: 1,
        name: '극한직업',
        score: 9
    },
    {
        id: 2,
        name: '증인',
        score: 9
    },
    {
        id: 3,
        name: '라라랜드',
        score: 8
    }
]

export const getPersonById = (id) => {
    const filteredPerson = people.filter(person => person.id == id);
    console.log(filteredPerson);
    return filteredPerson[0];
}

export const getMovieById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id == id);
    console.log(filteredMovies);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const filteredMovies = movies.filter(movie => movie.id !== id);
    // movies의 길이가 더 길다면 주어진 id의 영화(즉, 없어질 영화가)존재한다는 것이다
    if(movies.length > filteredMovies){
        movie = filteredMovies;
        return true;
    }
    return false;
}

export const addMovie = (_name, _score) => {
    const newMovie = {
        id: movies.length + 1,
        name: _name,
        score: _score
    }
    movies.push(newMovie);
    return newMovie;
}