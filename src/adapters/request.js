const mockData = {
  1: {
    title: 'Green Book',
    isWatched: true,
    id: 1,
  },
  2: {
    title: 'Spider Man 24',
    isWatched: false,
    id: 2,
  },
  3: {
    title: 'Oblivion',
    isWatched: true,
    id: 3,
  },
};

export default {
  async fetch(dataType) {
    if (dataType === 'movies') {
      await delay();
      return mockData;
    }
  },
};

function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });
}
