import Storage from "service/taskflow/Storage";

export default function authHeader() {
    const user = Storage.getCurrentUser();
  
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    }
    return {};
};