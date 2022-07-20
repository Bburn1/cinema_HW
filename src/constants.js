export const BASE_URL = 'http://localhost:5000/'

export const emptyMovie = {
  id: null,
  title: '',
  directorId: null,
  actorId: null,
  studioId: null,
  poster: '',
}

export const emptyActor = {
  id: null,
  movies: [],
  fullName: '',
  birthYear: '',
  nationality: '',
  image: '',
}
