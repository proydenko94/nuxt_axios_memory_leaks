let callCount = 0;

export default function({ axios }) {

  const interceptor = axios.interceptors.response.use( (response) => {

    if(process.server) {
      axios.interceptors.response.eject(interceptor);
    }

    return response;
  }, function (error) {
    if(process.server) {
      axios.interceptors.response.eject(interceptor);
    }

    return Promise.reject(error);
  });

}
