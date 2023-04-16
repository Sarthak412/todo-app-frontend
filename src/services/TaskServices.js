import axios from "axios";

const BASR_URL = "http://localhost:8080/api/v1/todos";

class TasKServices{

    addTask(todo){
        return axios.post(BASR_URL, todo);
    }

}

export default new TasKServices();