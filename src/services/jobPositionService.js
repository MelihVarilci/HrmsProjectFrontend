import axios from "axios";

export default class JobPositionService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }

    getAllWithCount() {
        return axios.get("http://localhost:8080/api/jobpositions/getallwithjobadcount");
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/jobpositions/getbyid?id=" + id)
    }

    add(jobPositionName) {
        return axios.post("http://localhost:8080/api/jobpositions/add", {
            positionName: jobPositionName
        })
    }
}