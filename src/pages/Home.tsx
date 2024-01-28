function Home() {
    return (
        <>
            <header>
                <div className="cta_btn__logout">
                    <div className="tooltip tooltip-left" data-tip="log out">
                        <button className="btn btn-outline btn-primary">
                            <span className="material-symbols--logout"></span>
                        </button>
                    </div>
                </div>
            </header>
            {/* <main>
                <div className="container">
                    <div className="area_title">
                        <h1>Todo List</h1>
                    </div>
                    <div className="area_input">
                        <div className="input-section">
                            <input type="text" placeholder="Add a todo . . ." className="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="date" className="input input-bordered input-secondary w-full max-w-xs" />
                            <button className="btn btn-secondary">
                                ADD
                            </button>
                        </div>
                    </div>
                    <div className="area_buttos">
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>All</a></li>
                                <li><a>Pending</a></li>
                                <li><a>Completed</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-secondary">Delete All</button>
                    </div>
                    <div className="area_list">
                        <table className="table w-full">
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
            </main> */}
        </>
    );
}

export default Home