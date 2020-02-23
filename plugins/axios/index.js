import baseAxios from 'axios';

const axios = baseAxios.create({
  timeout: 10000,
});


export default axios;
