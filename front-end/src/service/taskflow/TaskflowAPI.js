import axios from "axios";

import UserAPI from "service/taskflow/UserAPI";

export const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

class TaskflowAPI {
    static User = new UserAPI();
}

export default TaskflowAPI;
