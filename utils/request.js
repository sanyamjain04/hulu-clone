const API_KEY = process.env.API_KEY;

export default {
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  TopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  ActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  ComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  HorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  RomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  AnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  WesternMovies: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  ScifiMovies: {
      title: "Sci-Fi",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    DocumentaryMovies: {
      title: "Documentary",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
  TVMovies: {
    title: "TV",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
