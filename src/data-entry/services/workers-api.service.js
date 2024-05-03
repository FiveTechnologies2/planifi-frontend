import http from "../../shared/services/http-common.js";

export class WorkersApiService {
    getAll() {
        return http.get('/workers');
    }

    getById(id) {
        return http.get(`/workers/${id}`);
    }

    create(workerResource) {
        return http.post('/workers', workerResource);
    }

    update(id, workerResource) {
        return http.put(`/workers/${id}`, workerResource);
    }

    delete(id) {
        return http.delete(`/workers/${id}`);
    }

    findByName(name) {
        return http.get(`/workers?name=${name}`);
    }
}