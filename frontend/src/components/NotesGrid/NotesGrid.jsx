import { NoteCard } from '../NoteCard/NoteCard'
import './NotesGrid.css'

export const NotesGrid = ({ fetch, filteredNotes, setNoteInfo, isArchivedActive, setShowModal }) => {

    return (
        <ul className="notesGrid__container">
            {filteredNotes.map(note => (
                <NoteCard
                    fetch={fetch}
                    setNoteInfo={setNoteInfo}
                    setShowModal={setShowModal}
                    key={note._id} id={note._id}
                    title={note.title}
                    body={note.body}
                    archived={note.archived}
                    createdAt={note.createdAt}
                />
            ))}
        </ul>
    )
}