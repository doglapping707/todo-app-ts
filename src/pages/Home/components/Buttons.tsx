function Buttons() {
    return (
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
    );
}

export default Buttons;