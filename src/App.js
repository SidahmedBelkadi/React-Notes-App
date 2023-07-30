import { useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"


const App = () => {

  const [notes, setNotes] = useState([])
  const [searchNote, setSearchNote] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)
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

    <div className= {`${darkTheme && 'dark-mode' }`}>
      <div className="container">
      <Header handleChangeDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <SearchBar handleSearchNote={setSearchNote} />
      <NotesList 
        notes={searchedNotes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      </div>
    </div>
  )
}

export default App