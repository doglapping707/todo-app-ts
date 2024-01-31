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

                    {/* Header Area */}
                    <div className="area_header">
                        <h1 className="area_header--title">Todo List</h1>
                    </div>
                    {/* /END Header Area */}

                    {/* Input Area */}
                    <div className="area_input">
                        <input type="text" placeholder="Add a todo . . ." className="input input-bordered input-secondary" />
                        <input type="date" className="input input-bordered input-secondary" />
                        <button className="btn btn-secondary"><span className="ico--plus"></span></button>
                    </div>
                    {/* /END Input Area */}

                    {/* Buttons Area */}
                    <div className="area_buttos">
                        <details className="dropdown area_buttons--filterbtn">
                            <summary className="m-4 btn">FILTER</summary>
                            <ul className="p-8 shadow menu dropdown-content z-[2] bg-base-100 rounded-box">
                                <li><a>All</a></li>
                                <li><a>Pending</a></li>
                                <li><a>Completed</a></li>
                            </ul>
                        </details>
                        <button className="btn btn-secondary">DELETE ALL</button>
                    </div>
                    {/* /END Buttons Area */}

                    {/* List Area */}
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                                <tr>
                                    <td>task</td>
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
                            </tbody>
                        </table>
                    </div>
                    {/* /END List Area */}

                </div>
            </main>
            <footer>
                <div className="author-text">
                    <p>Made with ❤️ by <a href="https://github.com/doglapping707" target="_blank"><b>doglapping707</b></a></p>
                </div>
            </footer>
        </>
    );
}

export default Home