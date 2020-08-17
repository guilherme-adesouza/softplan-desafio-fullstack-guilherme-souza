import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";

class TaskAPI extends BaseServiceCRUD {

    constructor() {
        super('/task')
    }
}

export default TaskAPI;
