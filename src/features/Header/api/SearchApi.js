import axios from 'axios';

const SearchApi = {
  async fetchMovies(query) {
    try {
      const { data } = await axios.get(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${query}`,
        {
          headers: {
            'X-API-KEY': process.env.TOKEN,
          },
        }
      );
      return data;
    } catch (error) {
      console.error(`${error} - ошибка какая-то`);
    }
  },
};

export default SearchApi;
