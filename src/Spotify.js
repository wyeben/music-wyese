import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientId = '6e21e4fb97b34a1cbda731d0f9957f24';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-library-read','playlist-read-private'];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=
${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
   
});

export const setClientToken = (token) => {
    console.log('Setting token:', token);

    apiClient.interceptors.request.use(function(config){
        config.headers.Authorization= 'Bearer '+ token;
        return config;
    })
}

export default apiClient;