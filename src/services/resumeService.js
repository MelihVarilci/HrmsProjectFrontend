import axios from 'axios'

export default class ResumeService {
    getAll() {
        return axios.get("http://localhost:8080/api/resumees/getall")
    }

    getDetailById(id) {
        return axios.get("http://localhost:8080/api/resumees/getDetailById?id=1" + id)
    }
}