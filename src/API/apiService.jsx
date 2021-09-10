const api = "https://pixabay.com/api/?";

const key = "22346616-da93255f31f30d17d2f747f5d";

const fetchImages = (searchQuery, page) => {
  const fetchUrl = `${api}q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(fetchUrl).then((res) => res.json());
};

export default fetchImages;
