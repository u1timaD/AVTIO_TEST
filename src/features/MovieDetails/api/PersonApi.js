import axios from 'axios';

export const fetchPersonList = async (page, id) => {
  try {
    const { data } = await axios.get(
      `https://api.kinopoisk.dev/v1.4/person?page=${page}&limit=10&movies.id=${id}&profession.value=Актер&profession.value=Актриса`,
      {
        headers: {
          'X-API-KEY': process.env.TOKEN,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(`${error} - ошибка какая-то`);
    return { docs: [], pages: 0 };
  }
};
