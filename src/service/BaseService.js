import http from "../AppConfig";
import utils from "../utils";
import {printf} from "fast-printf";
http.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${utils.gLS("ACCESS_TOKEN")}`;
        console.log("token", utils.gLS("ACCESS_TOKEN"));
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class BaseService {
        getBaseHttp() {
        const rootApi = "http://localhost:8082/api/v1/";
        return printf(rootApi);
    }
}export default new BaseService();