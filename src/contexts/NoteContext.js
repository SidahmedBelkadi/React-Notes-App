import React from 'react'

export default React.createContext({
    notes: [],
    addNote: (text) => {},
    deleteNote: (id) => {}
})