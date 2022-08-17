import { NotesGrid } from './components/NotesGrid/NotesGrid';
import { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Modal } from './components/Modal/Modal';
import './App.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [noteInfo, setNoteInfo] = useState({});
  const [isArchivedActive, setIsArchivedActive] = useState(false);

  const onIconClick = () => {
    setNoteInfo({})
    setShowModal(true)
  }

  return (
    <div className="App__container">
      <Modal noteInfo={noteInfo} open={showModal} onClose={() => setShowModal(false)} />
      <div className='App__header_container'>
        <MdAddCircleOutline onClick={onIconClick} className='App__create_note_button' size={35} />
        <h1 className='App__title'>My notes</h1>
        <p className='App__archived_title'
          onClick={() => setIsArchivedActive(!isArchivedActive)}>
          {isArchivedActive ? '< Go back to unarchived notes' : 'Archived notes'}
        </p>
      </div>
      <NotesGrid setNoteInfo={setNoteInfo} setShowModal={setShowModal} isArchivedActive={isArchivedActive} />
    </div>
  );
}
