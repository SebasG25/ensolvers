import { NotesGrid } from './components/NotesGrid/NotesGrid';
import { useState } from 'react';
import './App.css';

export const App = () => {

  const [isArchivedActive, setIsArchivedActive] = useState(false);

  return (
    <div className="App__container">
      <div className='App__header_container'>
        <h1 className='App__title'>My notes</h1>
        <p className='App__archived_title'
          onClick={() => setIsArchivedActive(!isArchivedActive)}>
          {isArchivedActive ? '< Go back to unarchived notes' : 'Archived notes'}
        </p>
      </div>
      <NotesGrid isArchivedActive={isArchivedActive} />
    </div>
  );
}
