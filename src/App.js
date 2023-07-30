import { useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"


const App = () => {

  const [notes, setNotes] = useState([])

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    }

    setNotes(notes => ([...notes, newNote]))
  } 

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id )
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App