import axios from 'axios';

export default function getMeteoriteLandingData(callback) {
  axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json').then((res) => {
    console.log('axios result', res);
    callback(res.data);
  });
}
