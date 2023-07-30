import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import getCookie from "./components/cookies/getCookie"
import setCookie from "./components/cookies/setCookie"


const App = () => {

  const [notes, setNotes] = useState((JSON.parse(localStorage.getItem('notes-app-data'))))
  const [searchNote, setSearchNote] = useState('')
  const [darkTheme, setDarkTheme] = useState(getCookie('theme') || false)

  useEffect(() => {
    localStorage.setItem(
      'notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes])

  useEffect(() => {
    setCookie('theme', darkTheme, 2)
  }, [darkTheme])

  
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
  
  const searchedNotes = notes.filter(note => note.text.toLowerCase().includes(searchNote))

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