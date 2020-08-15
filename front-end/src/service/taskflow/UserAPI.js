import {request} from "service/taskflow/TaskflowAPI";
import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";

class UserAPI extends BaseServiceCRUD {

    constructor() {
        super('/user')
    }

    login = async (credentials) => {
        const {data} = await request.post('/auth/login', credentials);
        return data;
    };

    logout = async () => {
        await request.get('/auth/logout');
    };
}

export default UserAPI;
