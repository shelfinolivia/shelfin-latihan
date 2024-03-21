import { useEffect, useRef, useState } from "react";
import "./App.css";
import NoteItem from "./noteItem";
import FormTambah from "./FormTambah";
import FormEdit from "./FormEdit";
// import { nanoid } from 'nanoid'
import axios, { CanceledError } from "axios";
import { http } from "./http";
import { addNote, deleteNote, editNote, tampilkan } from "./Api";


function Note() {
  // const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);
  const [isEditKilik, setIsEditKlik] = useState(null);

  console.log(notes)

  // const tampilkan = async () => {
  //   const notes = axios.get(`${http}notes`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setNotes(response.data.data);
  //       } else {
  //         console.error("Non-200 status code:", response.status);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching notes:", error);
  //     });

  // }

  // const addNote = async (title, content) => {
  //   // setNotes((oldNote) => {
  //   const noteBaru = {
  //     // id: nanoid()
  //     title: title,
  //     content: content,
  //     writer: 1,
  //   };
  //   // return [...oldNote, noteBaru]
  //   await axios.post(http, noteBaru)
  //     .then((response) => {
  //       console.log(response.data)
  //       tampilkan()
  //       setNotes((oldNote) => [...oldNote, response.data]);
  //     }) 
  //     .catch((error) => {
  //       return error
  //     });

  // };

  // const edit = (id) => {
  //   setIsEditKlik(id);
  // }

  // const deleteNote = async (id) => {
  //   const deletes = await axios.delete(`${http}notes/${id}`)
  //     .then((response) => {
  //       /*   tampilkan() 
  //         setNotes((oldNote) => oldNote.filter((note) => note.id !== id)); */
  //       return response
  //     })
  //     .catch((err) => {
  //       return err
  //     });
  //   alert(deletes.data)
  //   tampilkan()
  // };


  // const editNote = async (id, title, content) => {
  //   const edits = await axios.put(`${http}notes/${id}`, { title, content })
  //     .then((response) => {
  //       return response
  //       // setNotes((oldNotes) =>
  //       // oldNotes.map((note) => (note.id === id ? { ...note, title, content } : note)))
  //     })
  //     .catch((err) => {
  //       return err
  //     })
  //   setIsEditKlik(null)
  //   alert(edits.data.data)
  //   tampilkan()
  // };


  // const cancel = () => {
  //   setIsEditKlik(null)
  // }

  const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data ?? null)
  }

  const handleAddData = async (title, content) => {
    await addNote(title, content)
    handleFetchData()
  }

  const handleUpdate = async (id, title, content, writer) => {
    await editNote(id, title, content, writer)
    handleFetchData()
  }

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData()
  }

  const Edit = (id) => {
    setIsEditKlik(id)
  }

  const cancelEdit = () => {
    setIsEditKlik(null);
  }

  useEffect(() => {
    tampilkan()
  }, [])



  return (
    <>
      <div className="App bg-gradient-to-r from-zinc-700 to-[#171717] p-10 h-full min-h-screen">
        {/* <h1 onClick={() => setCount((count) => count + 5)} className="text-center text-5xl p-5"> Notes App  {count} </h1> */}
        {isEditKilik ?
          <FormEdit
            targetValue={notes !== null ? notes.filter(e => e.id == isEditKilik)[0] : null}
            notes={notes}
            onEdit={handleUpdate}
            onCancel={cancelEdit} />
          : <FormTambah onAdd={handleAddData}
            onCancel={cancelEdit} />
        }

        <div className="notes-container border-t-2 border-black m-10 flex flex-wrap"></div>
        <div className="flex flex-wrap">
          {notes !== null ? notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={handleDelete}
              onEdit={Edit} />
          )) : null}
        </div>
      </div>
    </>
  );
}

export default Note;