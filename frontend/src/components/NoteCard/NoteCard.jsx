import './NoteCard.css'
import { FiTrash2 } from 'react-icons/fi'
import { BiArchiveIn } from 'react-icons/bi'
import { MdOutlineUnarchive } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { deleteNote } from '../../utils/deleteNote'
import { handleArchiveNote } from '../../utils/handleArchiveNote'

export const NoteCard = ({ fetch, setNoteInfo, setShowModal, id, archived, title, body, createdAt }) => {
    const zeroPad = (val) => val.toString().padStart(2, "0");
    let odate = new Date(createdAt);
    let year = odate.getFullYear();
    let month = zeroPad(odate.getMonth());
    let day = zeroPad(odate.getDate());
    let hour = zeroPad(odate.getHours());
    let mins = zeroPad(odate.getMinutes());

    const handleDeleteIcon = async () => {
        await deleteNote(id)
        await fetch()
    }

    const handleArchiveIcon = async () => {
        await handleArchiveNote(id, !archived)
        await fetch()
    }

    const handleEditIcon = () => {
        setNoteInfo({ id, title, body, isEditing: true })
        setShowModal(true)
    }

    return (
        <div className='noteCard__card'>
            <div className='noteCard__text' >
                <h3 className='noteCard__card_title'>{title}</h3>
                <p className='noteCard__card_text'>{body}</p>
            </div>
            <div className='noteCard__icon_container'>
                <FiTrash2 className='noteCard__icon noteCard__icon_1' size={25} onClick={handleDeleteIcon} />
                <FiEdit2 className='noteCard__icon noteCard__icon_3' size={25} onClick={handleEditIcon}/>
                {archived
                    ? <MdOutlineUnarchive className='noteCard__icon noteCard__icon_2' size={25} onClick={handleArchiveIcon} />
                    : <BiArchiveIn className='noteCard__icon noteCard__icon_2' size={25} onClick={handleArchiveIcon} />}
            </div>
            <div className='noteCard__date'>
                <p>Created at {day}/{month}/{year} {hour}:{mins}</p>
            </div>
        </div>
    )
}