export default function Home() {
    return (
        <div id="home">
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Add a new task" />
                    <button><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    <h1>Tasks-2</h1>
                    <ul className="tasks">
                        <li className="task">
                            <p>サンプルタスク_1</p>
                            <div>
                                <span className="ph--check-light"></span>
                                <span className="ph--trash-simple"></span>
                            </div>
                        </li>
                        <li className="task">
                            <p>サンプルタスク_2</p>
                            <div>
                                <span className="ph--check-light"></span>
                                <span className="ph--trash-simple"></span>
                            </div>
                        </li>
                        <li className="task">
                            <p>サンプルタスク_3</p>
                            <div>
                                <span className="ph--check-light"></span>
                                <span className="ph--trash-simple"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
