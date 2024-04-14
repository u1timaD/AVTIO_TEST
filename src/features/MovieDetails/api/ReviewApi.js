import axios from 'axios';

const getReviews = async (id, page) => {
  try {
    const { data } = await axios.get(
      `https://api.kinopoisk.dev/v1.4/review?page=${page}&limit=3&movieId=${id}`,
      {
        headers: {
          'X-API-KEY': process.env.TOKEN,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching reviews: ${error}`);
  }
};

export default getReviews;
