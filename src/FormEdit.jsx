
import { useEffect, useState } from "react";

export default function FormEdit({ onEdit, notes, onCancel, targetValue }) {
    const [title, setTitle] = useState(targetValue !== null ? targetValue.title : null)
    const [note, setNotes] = useState(targetValue !== null ? targetValue.content : null)
    const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);

    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        } else {
            setTitle("")
            setNotes("")
            setWriter("")
            onCancel()
        }
    }, [targetValue]);

    const handleEdit = () => {
        const konfirm = confirm("Apakah Anda Yakin?")
        if (konfirm) {
            onEdit(targetValue.id, title, note, writer);
            setTitle("")
            setNotes("")
        }
    };

    return (
        <div className="create-note w-[400px] mx-auto">
            <h1 className="text-white text-center text-2xl font-bold m-2">Edit Note</h1>
            <div className="flex flex-col">

                <input
                    value={title}
                    type="text"
                    placeholder="title"
                    name="title"
                    className="input"
                    onChange={(e) => setTitle(e.target.value)} />
                <textarea
                    onChange={(e) => setNote(e.target.value)}
                    value={note}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="note"
                    className="textarea">
                </textarea>

                <div className="btn flex place-content-between">
                    <button
                        onClick={handleEditNote}
                        className="bg-blue-500 text-white text-lg rounded-lg px-5 py-3 mt-2" >
                        Edit Note
                    </button>
                    <button
                        onClick={() => onCancel()}
                        className="bg-red-500  text-white text-lg rounded-lg px-5 py-3 mt-2" >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}