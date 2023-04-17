import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/todos";

class TasKServices{

    addTask(todo){
        return axios.post(BASE_URL, todo);
    }

    getAllTasks(){
        return axios.get(BASE_URL)
    }

    deleteTask(id){
        return axios.delete(BASE_URL + "/" + id);
    }


}

export default new TasKServices();      