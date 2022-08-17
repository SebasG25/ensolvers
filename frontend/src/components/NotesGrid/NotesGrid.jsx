import { useState, useEffect } from 'react'
import { NoteCard } from '../NoteCard/NoteCard';
import Notes from '../../utils/notes.json';
import './NotesGrid.css'

export const NotesGrid = ({ setNoteInfo, isArchivedActive, setShowModal }) => {
    const [notes, setNotes] = useState(Notes);

    useEffect(() => {
        setNotes(Notes.filter(note => note.archived === isArchivedActive));
    }, [isArchivedActive])

    return (
        <ul className="notesGrid__container">
            {notes.map(note => (
                <NoteCard
                    setNoteInfo={setNoteInfo}
                    setShowModal={setShowModal}
                    key={note.id} id={note.id}
                    title={note.title}
                    body={note.body}
                    archived={note.archived}
                />
            ))}
        </ul>
    )
}