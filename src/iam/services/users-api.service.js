import http from "../../shared/services/http-common.js";


export class UsersApiService {
    getAll() {
        return http.get('/users');
    }

    getById(id) {
        return http.get(`/users/${id}`);
    }

    createUser(user) {
        return http.post('/users', user);
    }

    updateUser(id, user) {
        return http.put(`/users/${id}`, user);
    }
}