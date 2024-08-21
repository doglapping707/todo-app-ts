import { Task } from "../types/Task";
import useCreateAxios from "../hooks/InstanceFactory";

async function getTasks() {
    const { data } = await useCreateAxios().get<Task[]>(`api/tasks`);
    return data;
}

async function updateDoneTask({ id, is_done }: Task) {
    const { data } = await useCreateAxios().patch<Task>(`api/tasks/update-done/${id}`,
        { is_done: !is_done }
    );
    return data;
}

async function createTask(title: string) {
    const { data } = await useCreateAxios().post<Task>(`api/tasks`,
        { title: title }
    );
    return data;
}

async function updateTask({ id, task }: { id: number, task: Task }) {
    const { data } = await useCreateAxios().put<Task>(`api/tasks/${id}`, task);
    return data;
}

async function deleteTask(id: number) {
    const { data } = await useCreateAxios().delete<Task>(`api/tasks/${id}`);
    return data;
}

export {
    getTasks,
    updateDoneTask,
    createTask,
    updateTask,
    deleteTask
}
