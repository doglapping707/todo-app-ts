import { useTasks } from "../../queries/TaskQuery";

export default function Home() {
    const { data: tasks, status } = useTasks();

    if (status == 'pending') {
        return <div className="loader" />
    } else if (status == 'error') {
        return <div className="align-center">Failed to read data.</div>
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">There are no registered Todos.</div>
    }

    return (
        <div id="home">
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Add a new task" />
                    <button><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    <h1>Tasks - 3</h1>
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
                </div>
            </div>
        </div>
    )
}
