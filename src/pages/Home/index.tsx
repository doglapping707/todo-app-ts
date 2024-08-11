import { useTasks } from "../../queries/TaskQuery";

export default function Home() {
    const { isPending, isError, data: tasks, error } = useTasks();

    if (isPending) {
        return <span>Loading...</span>
    } else if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div id="home">
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Add a new task" />
                    <button><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    {tasks.length > 0 ? (
                        <h1>Tasks - {tasks.length}</h1>
                    ) : ''}
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id}>
                                <p>{task.title}</p>
                                <div>
                                    <button><span className="lucide--check"></span></button>
                                    <button><span className="mdi--edit"></span></button>
                                    <button><span className="ph--trash-simple"></span></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
