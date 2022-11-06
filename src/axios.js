import axios from 'axios'


axios.defaults.baseURL = 'https://api.mahakiha.ir/v02';
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
axios.defaults.headers.common['app-id'] = 1;
