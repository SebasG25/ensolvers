import React from 'react'
import './NoteCard.css'
import { FiTrash2 } from 'react-icons/fi'
import { BiArchiveIn } from 'react-icons/bi'
import { MdOutlineUnarchive } from 'react-icons/md'

export const NoteCard = ({ setNoteInfo, setShowModal, id, archived, title, body }) => {

    return (
        <div className='noteCard__card' onClick={() => {
            setShowModal(true)
            setNoteInfo({ id, title, body })
        }}>
            <h3 className='noteCard__card_title'>{title}</h3>
            <p className='noteCard__card_text'>{body}</p>
            <div className='noteCard__icon_container'>
                <FiTrash2 className='noteCard__icon noteCard__icon_1' size={25} />
                {archived ? <MdOutlineUnarchive className='noteCard__icon noteCard__icon_2' size={25} /> :  <BiArchiveIn className='noteCard__icon noteCard__icon_2' size={25} />}
            </div>
        </div>
    )
}