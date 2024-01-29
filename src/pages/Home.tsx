function Home() {
    return (
        <>
            <header>
                <div className="btn--logout m-4">
                    <div className="tooltip tooltip-left" data-tip="log out">
                        <button className="btn btn-outline btn-primary">
                            <span className="ico--logout"></span>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="area_header">
                        <h1 className="area_header--title">Todo List</h1>
                    </div>
                    <div className="area_input">
                        <input type="text" placeholder="Add a todo . . ." className="input input-bordered input-secondary" />
                        <input type="date" className="input input-bordered input-secondary" />
                        <button className="btn btn-secondary"><span className="ico--plus"></span></button>
                    </div>
                    <div className="area_buttos">
                        <details className="dropdown area_buttons--filterbtn">
                            <summary className="m-4 btn">FILTER</summary>
                            <ul className="p-8 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                                <li><a>All</a></li>
                                <li><a>Pending</a></li>
                                <li><a>Completed</a></li>
                            </ul>
                        </details>
                        <button className="btn btn-secondary">DELETE ALL</button>
                    </div>
                    <div className="area_list">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="todos-list-body">
                                <tr className="todo-item" data-id="${todo.id}">
                                    <td>task</td>
                                    <td>2024-01-30</td>
                                    <td>completed</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm">
                                            EDIT
                                        </button>
                                        <button className="btn btn-success btn-sm">
                                            CHECK
                                        </button>
                                        <button className="btn btn-error btn-sm">
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home