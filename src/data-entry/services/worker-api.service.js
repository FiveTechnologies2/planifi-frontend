
import http from "../../shared/services/http-common.js";


export class WorkerApiService {
    getAll() {
        return http.get('/worker');
    }

    getById(id) {
        return http.get(`/worker/${id}`);
    }

    create(workerResource) {
        return http.post('/worker', workerResource);
    }

    update(id, workerResource) {
        return http.put(`/worker/${id}`, workerResource);
    }

    delete(id) {
        return http.delete(`/worker/${id}`);
    }

    findByTitle(title) {
        return http.get(`/worker?title=${title}`);
    }
}