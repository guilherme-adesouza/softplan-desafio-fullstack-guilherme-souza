import BaseServiceCRUD from "service/taskflow/BaseServiceCRUD";

class PersonAPI extends BaseServiceCRUD {

    constructor() {
        super('/person')
    }
}

export default PersonAPI;
