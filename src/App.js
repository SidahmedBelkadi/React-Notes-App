import { useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import SearchBar from "./components/SearchBar"


const App = () => {

  const [notes, setNotes] = useState([])
  const [searchNote, setSearchNote] = useState('')
  const searchedNotes = notes.filter(note => note.text.toLowerCase().includes(searchNote))

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
      <SearchBar handleSearchNote={setSearchNote} />
      <NotesList 
        notes={searchedNotes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App