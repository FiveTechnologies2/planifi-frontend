import http from "../../shared/services/http-common.js";


export class UsersApiService {
    getAll() {
        return http.get('/users');
    }

    getById(id) {
        return http.get(`/users/${id}`);
    }

    create(user) {
        return http.post('/users', user);
    }

    update(id, user) {
        return http.put(`/users/${id}`, user);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    getHighestId() {
        return http.get(`/users`)
            .then(response => {
                const users = response.data;
                return users.reduce((maxId, user) => Math.max(maxId, Number(user.id)), 0);
            })
            .catch(error => console.error('Error:', error));
    }
}