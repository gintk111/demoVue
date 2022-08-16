class Utils {
    vEMail(value) {
        if (!value) return true;
        const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        return regex.test(value);
    };

    gLS(key) {
        return localStorage.getItem(key);
    }
}
export default new Utils();