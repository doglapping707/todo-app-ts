import { useState } from "react";
import { useLogout } from "../../queries/AuthQuery";
import { useTasks, useUpdateDoneTask, useCreateTask, useDeleteTask } from "../../queries/TaskQuery";
import EditModal from "./components/EditModal";
import useMakeString from "../../hooks/MakeString";

export default function Home() {
    const logout = useLogout();
    const [title, setTitle] = useState('');
    const createTask = useCreateTask();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        createTask.mutate(title);
        setTitle('');
    }
    const updataDoneTask = useUpdateDoneTask();
    const deleteTask = useDeleteTask();

    const { isPending, isError, data: tasks, error } = useTasks();
    if (isPending) {
        return <span>Loading...</span>
    } else if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div id="home">
            <button className="logout_btn" onClick={() => logout.mutate()}><span className="ic--round-logout"></span></button>
            <div className="container">
                <form action="" className="add_form" onSubmit={handleSubmit}>
                    <input type="text" className="add_input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new task" />
                    <button className="add_btn"><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    {tasks.length > 0 ? (
                        <h1 className="task_qty">Tasks - {tasks.length}</h1>
                    ) : ''}
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id}>
                                <p className={task.is_done ? 'done' : ''}>{useMakeString(task.title, 20)}</p>
                                {task.is_done ? (
                                    <button onClick={() => { updataDoneTask.mutate(task) }}><span className="icon-park-outline--return"></span></button>
                                ) : (
                                    <div>
                                        <button onClick={() => { updataDoneTask.mutate(task) }}><span className="lucide--check"></span></button>
                                        <EditModal {...task} />
                                        <button onClick={() => { deleteTask.mutate(task.id) }}><span className="ph--trash-simple"></span></button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
