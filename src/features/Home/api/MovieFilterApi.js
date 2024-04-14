import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name',
      {
        headers: {
          'X-API-KEY': process.env.TOKEN,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(`${error} - ошибка какая-то`);
    return [];
  }
};
