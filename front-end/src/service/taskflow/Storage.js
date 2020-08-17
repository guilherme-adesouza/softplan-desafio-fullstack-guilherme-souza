export const USER_KEY = "__user_taskflow__";

export default class Storage {
    static logout = () => {
        localStorage.removeItem(USER_KEY);
    };
    
    static getCurrentUser = () => {
        return JSON.parse(localStorage.getItem(USER_KEY));
    };

    static setCurrentUser = (data) => {
        localStorage.setItem(USER_KEY, JSON.stringify(data));
    }
}
  