function Input() {
    return (
        <div className="area_input">
            <input type="text" placeholder="Add a todo . . ." className="input input-bordered input-secondary" />
            <input type="date" className="input input-bordered input-secondary" />
            <button className="btn btn-secondary"><span className="ico--plus"></span></button>
        </div>
    );
}

export default Input;