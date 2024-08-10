import axios from "axios";
import { Task } from "../types/Task";

async function getTasks() {
    const { data } = await axios.get<Task[]>(import.meta.env.VITE_API_URL + `/api/tasks`);
    return data;
}

export {
    getTasks
}
