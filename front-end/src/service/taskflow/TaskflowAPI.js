import axios from "axios";

import UserAPI from "service/taskflow/UserAPI";
import UserTaskAPI from "service/taskflow/UserTaskAPI";
import TaskAPI from "service/taskflow/TaskAPI";
import authHeader from "service/taskflow/AuthHeader";

export const request = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: authHeader()
});

class TaskflowAPI {
    static User = new UserAPI();
    static Task = new TaskAPI();
    static UserTask = new UserTaskAPI();
}

export default TaskflowAPI;
