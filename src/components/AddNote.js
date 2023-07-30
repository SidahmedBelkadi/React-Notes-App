import { useState } from "react"

const AddNote = ({handleAddNote}) => {
  
    const [text, setText] = useState('')
    const caracterLimit = 1000;
  
    const handleChange = (e) => {
        if (caracterLimit - e.target.value.length >= 0) {
            setText(t => e.target.value)
        }
        return  
    }

    const handleAddClick = () => {

        if (text.trim().length <= 0) {
            return
        }

        handleAddNote(text)
        setText('')
    }

    return (
    <div className="note new">
        <textarea 
            cols="10" rows="8" 
            placeholder="Type to add new note"
            value={text} onChange={handleChange}>
        </textarea>
        <div className="note-footer">
            <small> { caracterLimit - text.length } Reaminaing</small>
            <button onClick={handleAddClick} className="save">save</button>
        </div>
    </div>
  )
}

export default AddNote