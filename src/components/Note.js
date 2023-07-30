import { MdDeleteForever } from 'react-icons/md'

const Note = ({note : {id, text, date}, handleDeleteNote}) => {


  const handleDeleteClick = () => {
    handleDeleteNote(id)
  }


  return (
    <div className="note">
        <span>{ text }</span>
        <div className="note-footer">
            <small>{ date }</small>
            <MdDeleteForever className='delete-icon' size='1.3rem' onClick={handleDeleteClick}/>
        </div>
    </div>
  )
}

export default Note