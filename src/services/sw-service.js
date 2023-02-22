import axios from 'axios';

export const defaultStarshipInfo = {
  name: '',
  model: '',
  starship_class: '',
  max_atmosphering_speed: '',
};

const BASE_URL = 'https://www.swapi.tech/api';
const IMG_URL = 'https://starwars-visualguide.com/assets/img';

export const getStarship = (id, successCallback, failureCallback) => {
  axios({
    method: 'get',
    url: `${BASE_URL}/starships/${id}`,
  })
    .then((res) => res.data.result.properties)
    .then((props) => successCallback(props))
    .catch((res) => failureCallback(false));
};

export const defaultStarshipImage = `${IMG_URL}/big-placeholder.jpg`;

export const testStarshipImageLink = (id, callback) => {
  const imageUrl = `${IMG_URL}/starships/${id}.jpg`;
  axios({
    method: 'get',
    url: imageUrl,
  })
    .then((res) => callback(imageUrl))
    .catch((res) => callback(defaultStarshipImage));
};

export const getPeople = (id, callback) => {
  axios({
    method: 'get',
    url: `${BASE_URL}/people/${id}`,
  })
    .then((res) => res.data.result.properties)
    .then((props) => callback(props));
};

export const getPlanet = async (id) => {
  const res = await axios.get(`${BASE_URL}/planets/${id}`);
  return res.data.result.properties;
};

export const getPlanetImg = async (id) => {
  const res = await axios.get(`${IMG_URL}/planets/${id}.jpg`);
  return res.config.url;
};
