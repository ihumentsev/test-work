import axios from 'axios';

// export default async function fetchMovies(name, page) {
//   const url = 'https://api.themoviedb.org/3/trending/all/day';
//   const key = '2686b3f0aebdd48d7f6093d290775aa4';
//   const filter = `?api_key=${key}`;
//   return await axios.get(`${url}${filter}`).then(res => res.data);
// }
const AXIOS = axios.create({
  baseURL: 'https://643856604660f26eb19aa37e.mockapi.io/',
  // params: {
  //   api_key: '2686b3f0aebdd48d7f6093d290775aa4',
  // },
});

function fetchTrendMovies(page) {
  const url = new URL('https://643856604660f26eb19aa37e.mockapi.io/users');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  return AXIOS.get(url).then(res => res.data);
}

function FeatchSearchMovies(query) {
  return AXIOS.get(`search/movie?query=${query}&page=1`).then(res => res.data);
}
function FeatchMovieDetails(movieId) {
  return AXIOS.get(`movie/${movieId}?`).then(res => res.data);
}
function FeatchCast(movieId) {
  return AXIOS.get(`movie/${movieId}/credits?`).then(res => res.data);
}
function FeatchReviews(movieId) {
  return AXIOS.get(`movie/${movieId}/reviews?`);
}

function FeatchVideo(movieId) {
  return AXIOS.get(`movie/${movieId}/videos?`);
}
export {
  fetchTrendMovies,
  FeatchSearchMovies,
  FeatchMovieDetails,
  FeatchCast,
  FeatchReviews,
  FeatchVideo,
};
