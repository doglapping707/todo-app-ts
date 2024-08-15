import { useState } from 'react';
import { Task } from "../../../types/Task";
import { CSSTransition } from "react-transition-group";

export default function EditModal(task: Task) {
    const [show, setShow] = useState(false);

    function openModal() {
        setShow(true);
    }
    function closeModal() {
        setShow(false);
    }

    return (
        <>
            <button onClick={openModal}><span className="mdi--edit"></span></button>
            <CSSTransition
                in={show}
                timeout={200}
                classNames="transition"
                unmountOnExit
            >
                <div className="overlay">
                    <div className="modal">
                        <h1>Update Task</h1>
                        <form action="">
                            <input type="text" className="update_input" placeholder="Input a task title" defaultValue={task.title} />
                        </form>
                        <div className="button_area">
                            <button className="cancel_btn" onClick={closeModal}>Cancelar</button>
                            <button className="update_btn">Salvar</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
