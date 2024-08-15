import { Task } from "../../../types/Task";

export default function EditModal(props: { show: Boolean, setShow: any, task: Task }) {
    function closeModal() {
        props.setShow(false);
    }

    if (props.show) {
        return (
            <div className="overlay">
                <div className="modal">
                    <h1>Update Task</h1>
                    <form action="">
                        <input type="text" className="update_input" placeholder="Input a task title" defaultValue={props.task.title} />
                    </form>
                    <div className="button_area">
                        <button className="cancel_btn" onClick={closeModal}>Cancelar</button>
                        <button className="update_btn">Salvar</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
