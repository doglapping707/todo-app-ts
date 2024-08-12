import { useState } from "react";
import { useTasks, useUpdateDoneTask, useCreateTask } from "../../queries/TaskQuery";

export default function Home() {
    const { isPending, isError, data: tasks, error } = useTasks();
    const updataDoneTask = useUpdateDoneTask();
    const createTask = useCreateTask();

    const [title, setTitle] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createTask.mutate(title)
        setTitle('')
    }

    if (isPending) {
        return <span>Loading...</span>
    } else if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div id="home">
            <div className="container">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new task" />
                    <button><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    {tasks.length > 0 ? (
                        <h1>Tasks - {tasks.length}</h1>
                    ) : ''}
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id}>
                                <p className={task.is_done ? 'done' : ''}>{task.title}</p>
                                {task.is_done ? (
                                    <button onClick={() => {updataDoneTask.mutate(task)}}><span className="icon-park-outline--return"></span></button>
                                ) : (
                                    <div>
                                        <button onClick={() => {updataDoneTask.mutate(task)}}><span className="lucide--check"></span></button>
                                        <button><span className="mdi--edit"></span></button>
                                        <button><span className="ph--trash-simple"></span></button>
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
