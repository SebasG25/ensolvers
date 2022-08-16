import { useState, useEffect } from 'react'
import { NoteCard } from '../NoteCard/NoteCard';
import Notes from '../../utils/notes.json';
import './NotesGrid.css'

export const NotesGrid = ({isArchivedActive}) => {
    const [notes, setNotes] = useState(Notes);

    useEffect(() => {
        setNotes(Notes.filter(note => note.archived === isArchivedActive));
    }, [isArchivedActive])

    return (
        <ul className="notesGrid__container">
            {notes.map(note => (
                <NoteCard id={note.id} title={note.title} body={note.body} />
            ))}
        </ul>
    )
}