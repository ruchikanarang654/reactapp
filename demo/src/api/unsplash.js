import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID bbad290bd34ff6eb6ca66700d04f10aa43b66e4376b2fd750329b72fee8b90eb'
      }
})

