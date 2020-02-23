import axios from './index';

export default function(context) {

  if(!context.axios) {
    context.axios = axios;
  }
}
