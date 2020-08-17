import axios from "axios";

import UserAPI from "service/taskflow/UserAPI";
import authHeader from "service/taskflow/AuthHeader";

export const request = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: authHeader()
});

class TaskflowAPI {
    static User = new UserAPI();
}

export default TaskflowAPI;
