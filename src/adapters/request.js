import movies from './movies';

export default {
  async fetch(dataType) {
    if (dataType === 'movies') {
      await delay();
      return movies;
    }
  },
};

function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1500);
  });
}
