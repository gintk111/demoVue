import http from "../AppConfig";
import bService from "./BaseService"

http.defaults.baseURL = bService.getBaseHttp();

class UserService {
    logIn(user) {
        http.defaults.baseURL = bService.getBaseHttp();
        return http.post(`login`, user);
    }
}

export default new UserService();