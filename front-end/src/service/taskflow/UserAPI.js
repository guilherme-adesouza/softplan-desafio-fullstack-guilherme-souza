import {request} from "service/taskflow/TaskflowAPI";
import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";
import Storage from "service/taskflow/Storage";

class UserAPI extends BaseServiceCRUD {

    constructor() {
        super('/user')
    }

    login = async (credentials) => {
        const {data} = await request.post('/authenticate', credentials);
        if (data.token) {
            Storage.setCurrentUser(data);
        }
        return data;
    };

    logout = () => {
        Storage.logout();
    }
}

export default UserAPI;
