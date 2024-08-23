import { useState, useRef } from 'react';
import { useUpdateTask } from "../../../queries/TaskQuery";
import { Task } from "../../../types/Task";
import { CSSTransition } from "react-transition-group";

export default function EditModal(task: Task) {
    const [show, setShow] = useState(false);

    const [editTitle, setEditTitle] = useState(task.title);
    const updateTask = useUpdateTask();
    function handleUpdate(e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask = { ...task };
        newTask.title = editTitle;
        updateTask.mutate({
            id: task.id,
            task: newTask
        }, {
            onSuccess: () => {
                setShow(false)
            },
        });
    }

    const nodeRef = useRef(null);
    function openModal() {
        setShow(true);
    }
    function closeModal() {
        setEditTitle(task.title)
        setShow(false);
    }

    return (
        <>
            <button onClick={openModal}><span className="mdi--edit"></span></button>
            <CSSTransition
                in={show}
                timeout={200}
                nodeRef={nodeRef}
                classNames="transition"
                unmountOnExit
            >
                <div className="overlay" ref={nodeRef}>
                    <div className="modal">
                        <h1>Update Task</h1>
                        <form onSubmit={handleUpdate}>
                            <input type="text" className="update_input" defaultValue={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Input a task title" />
                        </form>
                        <div className="button_area">
                            <button className="cancel_btn" onClick={closeModal}>Cancelar</button>
                            <button className="update_btn" onClick={handleUpdate}>Salvar</button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
