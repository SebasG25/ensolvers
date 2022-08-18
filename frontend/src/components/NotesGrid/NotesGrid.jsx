import { useState, useEffect } from 'react'
import { NoteCard } from '../NoteCard/NoteCard';
import { getNotes } from '../../utils/getNotes';
import { Spinner } from '../Spinner/Spinner';
import './NotesGrid.css'

export const NotesGrid = ({ setNoteInfo, isArchivedActive, setShowModal }) => {
    const [notes, setNotes] = useState();
    const [filteredNotes, setFilteredNotes] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true)
            const arrayOfNotes = await getNotes()
            setNotes(arrayOfNotes)
            const filtered = arrayOfNotes.filter(note => note.archived === isArchivedActive)
            setFilteredNotes(filtered)
            setIsLoading(false)
        }
        fetchNotes()
    } , [isArchivedActive])
    
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className="notesGrid__container">
            {filteredNotes.map(note => (
                <NoteCard
                    setNoteInfo={setNoteInfo}
                    setShowModal={setShowModal}
                    key={note._id} id={note._id}
                    title={note.title}
                    body={note.body}
                    archived={note.archived}
                />
            ))}
        </ul>
    )
}