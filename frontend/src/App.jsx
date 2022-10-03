import { NotesGrid } from './components/NotesGrid/NotesGrid';
import { useEffect, useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { getNotes } from './utils/getNotes';
import { Modal } from './components/Modal/Modal';
import './App.css';
import { Spinner } from './components/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [noteInfo, setNoteInfo] = useState({});
  const [isArchivedActive, setIsArchivedActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [filteredNotes, setFilteredNotes] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const arrayOfNotes = await getNotes()
      setNotes(arrayOfNotes)
      const filtered = arrayOfNotes.filter(note => note.archived === isArchivedActive)
      setFilteredNotes(filtered)
      setIsLoading(false)
    }
    fetch()
  }, [isArchivedActive])

  const fetch = async () => {
    setIsLoading(true)
    const arrayOfNotes = await getNotes()
    setNotes(arrayOfNotes)
    const filtered = arrayOfNotes.filter(note => note.archived === isArchivedActive)
    setFilteredNotes(filtered)
    setIsLoading(false)
  }

  const onIconClick = () => {
    setShowModal(true)
    setNoteInfo({ isEditing: false })
  }

  return (
    <div className="App__container">
      <Modal fetch={fetch} noteInfo={noteInfo} open={showModal} onClose={() => setShowModal(false)} />
      <div className='App__header_container'>
        <MdAddCircleOutline onClick={onIconClick} className='App__create_note_button' size={35} />
        <h1 className='App__title'>{!isArchivedActive ? 'My notes' : 'My archived notes'}</h1>
        <p className='App__archived_title'
          onClick={() => setIsArchivedActive(!isArchivedActive)}>
          {isArchivedActive ? '< Go back to unarchived notes' : 'Archived notes'}
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        draggable
        pauseOnHover
      />
      {
        !isLoading
          ? <NotesGrid
            fetch={fetch}
            notes={notes}
            filteredNotes={filteredNotes}
            setNoteInfo={setNoteInfo}
            setShowModal={setShowModal}
            isArchivedActive={isArchivedActive}
          />
          : <Spinner />
      }
    </div>
  )
}
