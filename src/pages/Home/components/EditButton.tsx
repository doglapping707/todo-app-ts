import { useState } from 'react';
import EditModal from "./EditModal";
import { Task } from "../../../types/Task";

export default function EditButton(task: Task) {
    const [show, setShow] = useState(false);

    function openModal() {
        setShow(true);
    }

    return (
        <>
            <button onClick={openModal}><span className="mdi--edit"></span></button>
            <EditModal {...{ show, setShow, task }} />
        </>
    )
}
