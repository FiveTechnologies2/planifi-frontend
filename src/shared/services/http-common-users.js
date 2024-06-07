import axios from 'axios';

const USERS_API_BASE_URL = 'https://my-json-server.typicode.com/FiveTechnologies2/planifi-users-fake-server';

const usersHttp = axios.create({
    baseURL: USERS_API_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

export default usersHttp;