import { useEffect } from 'react';
import { useState } from 'react';
import './Modal.css'

export const Modal = ({ noteInfo, open, onClose }) => {
  const [note, setNote] = useState({});

  useEffect(() => {
    setNote(noteInfo);
  }, [noteInfo])

  const onPositiveButtonClick = (e) => {
    e.preventDefault();
    console.log('positive button clicked');
    setNote({})
    onClose()
  }

  const onCancelButtonClick = (e) => {
    e.preventDefault();
    console.log('onCancelButtonClick')
    setNote({})
    onClose()
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  if (!open) return null

  return (
    <div onClick={onClose} className="modal__overlay">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modal__container">
        <div className="modal__right">
          <p onClick={onClose} className="modal__closebtn">X</p>
          <div className="modal__content">
            <form className='modal__form' action="">
              <div className="modal__form_content">
                <div className="modal__input_container">
                  <input name='title' type="text" className="modal__title" value={note?.title} onChange={handleChange} />
                  <label>Title</label>
                </div>
                <div className="modal__input_container">
                  <textarea name='body' className="modal__text" value={note?.body} onChange={handleChange} />
                  <label>Write your note here</label>
                </div>
              </div>
              <div className="modal__btn_container">
                <button onClick={onPositiveButtonClick} className="modal__btn_primary">
                  <span className="bold">{note ? 'UPDATE' : 'CREATE'}</span>
                </button>
                <button onClick={onCancelButtonClick} className="modal__btn_outline">
                  <span className="bold">CANCEL</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}