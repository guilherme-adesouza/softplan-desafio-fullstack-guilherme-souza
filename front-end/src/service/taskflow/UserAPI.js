import {request} from "service/taskflow/TaskflowAPI";
import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";

const user = {id: 1, name: 'Admnistrator', email: 'admin@', role: 'SUPER'};

class UserAPI extends BaseServiceCRUD {

    constructor() {
        super('/user')
    }

    verifyAuth = async () => {
        //const {data} = await request.post('/auth/verify');
        return user;
    }

    login = async (credentials) => {
        //const {data} = await request.post('/auth/login', credentials);
        return user;
    };

    logout = async () => {
        await request.get('/auth/logout');
    };
}

export default UserAPI;
