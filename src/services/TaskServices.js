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

    getTaskId(id){
        return axios.get(BASE_URL + "/" + id);
    }

    updateTask(todo, id){
        return axios.put(BASE_URL + "/" + id, todo);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TasKServices();      