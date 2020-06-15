import React from 'react';
import axios from 'axios';


//Axios instance
const api = axios.create({ 
      baseURL: 'http://localhost:3333'
})

export default api;