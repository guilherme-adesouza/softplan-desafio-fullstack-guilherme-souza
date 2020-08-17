import {request} from "service/taskflow/TaskflowAPI";
import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";

class UserTaskAPI extends BaseServiceCRUD {

    constructor() {
        super('/user-task')
    }

    addUser = async (email) => {
        const {data} = await request.post(`${this.url}/add-user`, email);
        return data;
    }
}

export default UserTaskAPI;
