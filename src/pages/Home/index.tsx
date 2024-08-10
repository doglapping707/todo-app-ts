export default function Home() {
    return (
        <div id="home">
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Add a new task" />
                    <button><span className="ph--plus-light"></span></button>
                </form>
                <div>
                    <h1>Tasks - 3</h1>
                    <li>
                        <p>サンプルタスク-1</p>
                        <div>
                            <button><span className="lucide--check"></span></button>
                            <button><span className="mdi--edit"></span></button>
                            <button><span className="ph--trash-simple"></span></button>
                        </div>
                    </li>
                    <li>
                        <p>サンプルタスク-2</p>
                        <div>
                            <button><span className="lucide--check"></span></button>
                            <button><span className="mdi--edit"></span></button>
                            <button><span className="ph--trash-simple"></span></button>
                        </div>
                    </li>
                    <li>
                        <p>サンプルタスク-3</p>
                        <div>
                            <button><span className="lucide--check"></span></button>
                            <button><span className="mdi--edit"></span></button>
                            <button><span className="ph--trash-simple"></span></button>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}
