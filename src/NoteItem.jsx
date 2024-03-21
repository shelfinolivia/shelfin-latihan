function NoteItem({ id, title, content, onDelete, onEdit }) {

  const handleDelete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?")
    if (konfirm) {
      onDelete(id)
      alert("Berhasil Mendelete")
    }
  }
//ini berubah
  return (
    <div>
      <div className="note mt-5 m-9 w-[300px] p-4 py-10 relative rounded-lg drop-shadow-md bg-zinc-600 to-opacity-25 ">
        <button
          onClick={() => handleDelete(id)}
          className="delete-note absolute right-2 top-0 font-bold text-2xl text-red-600">
          X
        </button>
        <h1
          className="text-white">
          {id}
        </h1>
        <h3
          className="font-bold text-1xl pb-2">
          {title}
        </h3>
        <p>{content}</p>
        <button
          onClick={() => onEdit(id)}
          className="edit-note bg-blue-500 py-2 px-5 text-white rounded-lg mt-10">
          Edit
        </button>
      </div>
    </div>
  )
}

export default NoteItem;