import AddNote from "./AddNote"
import Note from "./Note"

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-list">
    {
      notes.map(function (note) {
        return  <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      })
    }
    <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList