import axios from 'axios';

export default function getMeteoriteLandingData(callback) {
  axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json').then((res) => {
    console.log('axios result', res);
    callback(res.data);
  });
}

// function paginate (array, page_size, page_number) {
//   --page_number; // because pages logically start with 1, but technically with 0
//   return array.slice(page_number * page_size, (page_number + 1) * page_size);
// }
