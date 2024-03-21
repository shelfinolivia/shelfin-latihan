import { useState } from "react";

function FormTambah({ onAdd }) {
    const [title, setTitle] = useState("");
    const [note, setNotes] = useState("");

    const handleSubmit = () => {
        onAdd(title, note);
        setTitle("");
        setNotes("");
    };

    return (
        <div className="container">
            <h1 className="text-white text-center text-2xl font-bold m-2">Tambah Note</h1>
            <div className='flex flex-col'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className="input"
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className="textarea">
                </textarea>

                <button
                    onClick={() => handleSubmit()}
                    className="bg-[#171717] text-white text-lg rounded-lg px-5 py-3 mt-2" >
                    Add Note
                </button>

            </div>
        </div>
    );
}

export default FormTambah;
