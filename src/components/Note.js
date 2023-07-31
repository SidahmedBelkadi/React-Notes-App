import { useContext } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import NoteContext from '../contexts/NoteContext'

const Note = ({note : {id, text, date}}) => {


  const { deleteNote } = useContext(NoteContext)

  return (
    <div className="note">
        <span>{ text }</span>
        <div className="note-footer">
            <small>{ date }</small>
            <MdDeleteForever className='delete-icon' size='1.3rem' onClick={() => deleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note