import { useContext } from "react"
import AddNote from "./AddNote"
import Note from "./Note"
import NoteContext from "../contexts/NoteContext"

const NotesList = () => {

  const {notes} = useContext(NoteContext)

  return (
    <div className="notes-list">
    {
      notes.map(function (note) {
        return  <Note key={note.id} note={note}/>
      })
    }
    <AddNote />
    </div>
  )
}

export default NotesList