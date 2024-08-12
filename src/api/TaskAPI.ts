import axios from "axios";
import { Task } from "../types/Task";

async function getTasks() {
    const { data } = await axios.get<Task[]>(import.meta.env.VITE_API_URL + `/api/tasks`);
    return data;
}

async function updateDoneTask({ id, is_done }: Task) {
    const { data } = await axios.patch<Task>(import.meta.env.VITE_API_URL + 
        `/api/tasks/update-done/${id}`,
        { is_done: !is_done }
    );
    return data;
}

async function createTask(title: string) {
    const { data } = await axios.post<Task>(import.meta.env.VITE_API_URL + 
        `/api/tasks`,
        { title: title }
    );
    return data;
}

export {
    getTasks,
    updateDoneTask,
    createTask
}
