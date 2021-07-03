import axios from "axios";

export default class JobAdvertisementService {
    getJobAds() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getallactive")
    }

    getJobAdsOrderByDate() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getallactiveorderbydate")
    }
}