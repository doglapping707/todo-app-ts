import { useTasks } from "../../../queries/TaskQuery";

function List() {
    const { data: tasks, status } = useTasks();

    if (status == 'pending') {
        return <div className="loader" />
    } else if (status == 'error') {
        return <div className="align-center">Failed to read data.</div>
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">There are no registered Todos.</div>
    }

    return (
        <div className="overflow-x-auto area_list">
            <table className="table table-pin-rows">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title.length > 14 ? task.title.slice(0, 14) + "..." : task.title}</td>
                            <td>2024-01-30</td>
                            <td>completed</td>
                            <td>
                                <button className="btn btn-warning btn-sm mr-7">
                                    <span className="ico--edit"></span>
                                </button>
                                <button className="btn btn-success btn-sm mr-7">
                                    <span className="ico--check"></span>
                                </button>
                                <button className="btn btn-error btn-sm">
                                    <span className="ico--trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;